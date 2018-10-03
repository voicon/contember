#!/usr/bin/env sh
set -e

node ./node_modules/.bin/migrations-continue src/config/config.yaml
node ./node_modules/.bin/init src/config/config.yaml src/projects
node ./dist/src/index.js
