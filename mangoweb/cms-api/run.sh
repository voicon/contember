#!/usr/bin/env sh
set -e

node ./dist/src/index.js update
node ./dist/src/index.js start
