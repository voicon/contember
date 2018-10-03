#!/usr/bin/env sh
set -e

node ./node_modules/cms-api/dist/src/bin/migrations-continue.js src/config/config.yaml
node ./node_modules/cms-api/dist/src/bin/init.js src/config/config.yaml src/projects
node ./dist/src/index.js
