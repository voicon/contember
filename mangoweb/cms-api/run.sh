#!/usr/bin/env sh
set -e

node ./node_modules/cms-api/dist/src/bin/console engine:migrations:continue
node ./node_modules/cms-api/dist/src/bin/console init
node ./node_modules/cms-api/dist/src/bin/console start
