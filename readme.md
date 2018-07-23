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
lerna bootstrap --hoist
```

Hoist option deduplicates `node_modules` structure into one shared folder and per package differences. In case of broken symlinks you can run `lerna link` to restore them.


### Link internal dependency

Installs `apple` and `banana` dependencies into `grocery` package. Creates a symlink if its a local package.

```sh
lerna add apple banana --scope=grocery
```

### Run watch mode across all projects

```sh
lerna run --parallel start
```
