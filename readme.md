# Contember

## Repository Structure

~~~
/packages = reusable TypeScript libraries which will later be published as open-source
/mangoweb = mangoweb-specific admin and api instances
~~~

## Docker dev setup

### Initial setup

- create `docker-compose.override.yaml` using `docker-compose.override.dist.yaml`
- create `instances/mangoweb/api/src/config/config.yaml`  using `instances/mangoweb/api/src/config/config.sample.yaml`
- run `./docker/bootstrap.sh` 
- follow instructions

### Regular run

- run `docker-compose up`

### Running tests

- run `./docker/npm test`

### Generating project migrations

- run `./docker/console diff project migration-name` (e.g. `./docker/console diff mangoweb gallery`)
- review generated file
- run `./docker/console update`
- currently it is also required to restart api container using `docker-compose up --force-recreate -d api`

### Running and debugging individual tests in PhpStorm

Currently it is not possible to use a remote Node.js interpreter for Mocha tests so you need a local node interpreter. 

- Go to `Run / Edit configurations / Templates / Mocha`
- Paste following ENV variables
```
TS_NODE_PROJECT=tsconfig.devTests.json
TEST_DB_HOST=127.0.0.1
TEST_DB_PASSWORD=contember
TEST_DB_NAME=tests
TEST_DB_PORT=4479
TEST_CWD_SUFFIX=/packages/cms-api
NODE_ENV=development
TEST_DB_USER=contember
```
- This setup will use a database from docker-compose and also there is different tsconfig file optimized for test run.
- set Extra mocha options to `--require ts-node/register --timeout 15000`
- Go to test file and run or debug it  


## Legacy non-docker instructions

We use [Lerna](https://lernajs.io/) to help with a few things

### Install all dependencies and bootstrap the project

Create `mangoweb/admin/.env` using `.env.sample` in the same directory.
Don't worry about the contents for the time being ‒ they will be updated later.

```sh
npm ci && \
npm run bootstrap && \
npm run build
```

Instead of `npm run bootstrap` you may also use `npm run bootstrap:hoist`. The hoist option deduplicates `node_modules` structure into one shared folder and per package differences. This makes the installation faster but the build is less reliable as it differs from CI. In case of broken symlinks you can run `lerna link` to restore them.


### Run TypeScript watch across all packages

```sh
npm run ts:watch
```


### Run tests

* prerequisites
  * running `npm run ts:watch` in background

```sh
npm run test
```


### Start API

* prerequisites
  * running `npm run ts:watch` in background
  * creating PostgreSQL database
  * creating `mangoweb/cms-api/.env` (you can use `(cd mangoweb/cms-api && cp example.env .env && nano .env)`)
  * creating `mangoweb/cms-api/src/config/config.yaml` (you can use `mangoweb/cms-api/src/config/config.sample.yaml`) 
  * setting up database by running `(cd mangoweb/cms-api && npm run sync)`
  
Use `mangoweb/admin/config.sample.json` to create `config.local.json` in the same directory. Don't worry about hte login key for the time being.

```sh
(cd mangoweb/cms-api && npm run start)
```

### Create super-admin

* prerequisites
  * performing the steps described in the _Start API_ section.
  
Go to the tenant api, by default [http://localhost:4000/tenant](http://localhost:4000/tenant). 

Set the following http header:
```json
{ "Authorization": "Bearer 12345123451234512345"}
```
…and create the super admin:
```graphql
mutation {
  setup(superadmin: { email: "admin@example.com", password: "123" }) {
    ok
    result {
      superadmin {
        id
      }
      loginKey {
        id
        token
        identity {
          id
        }
      }
    }
  }
}
```

Change the authorization header to the login key token:

```json
{ "Authorization": "Bearer YOUR_LOGIN_TOKEN"}
```

…and proceed to sign in:

```graphql
mutation {
  signIn(email: "admin@example.com", password: "123") {
    ok
    result {
      token
      person {
        identity {
          id
        }
      }
    }
  }
}
```

Now change the authorization header to the resulting token:

```json
{ "Authorization": "Bearer YOUR_AUTHORIZATION_TOKEN"}
```

…and add yourself to any project. The `identityId` is what you've just obtained in the previous mutation. The `projectId` is in `mangoweb/cms-admin/src/config/config.yaml` (be careful not to use the stage id).

```graphql
mutation {
  addProjectMember(
    identityId: "YOUR_IDENTITY_ID"
    projectId: "YOUR_PROJECT_ID"
    roles: ["admin"]
  ) {
    ok
    errors {
      code
      endUserMessage
      developerMessage
    }
  }
}
```

Lastly, update the login token in `mangoweb/admin/config.local.json` and restart the servers. You should now be able to login normally as well as use the content api.

### Start admin interface

When you have API server running and the user is created you can start admin interface by running `(cd mangoweb/admin && npm run start)`. Then you can sign in with your credentials.


## Docker
1. `docker/bootstrap.sh`
2. `docker-compose up -d`
