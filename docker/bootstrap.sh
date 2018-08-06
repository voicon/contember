#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$DIR")"

# project root
cd "$PROJECT_ROOT"


function npm {

docker-compose run --rm \
	--workdir="/src${PWD:${#PROJECT_ROOT}}" \
	--entrypoint=npm \
    cms_api "$@"
    }


set -x

npm install
npm run bootstrap
npm run build
