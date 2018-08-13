# To Be Named CMS

## Repository Structure

~~~
/packages = reusable TypeScript libraries which will later be published as open-source
/mangoweb = mangoweb-specific admin and api instances
~~~

## Monorepo operations

We use [Lerna](https://lernajs.io/) to help with a few things

### Install all dependencies and bootstrap the project

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
  * importing `packages/cms-api/src/tenant-api/schema/tenant.sql`
  * creating `mangoweb/cms-api/.env` (you can use `(cd mangoweb/cms-api && cp example.env .env && nano .env)`)

```sh
(cd mangoweb/cms-api && npm run start)
```
