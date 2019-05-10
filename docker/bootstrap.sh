#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$DIR")"

# project root
cd "$PROJECT_ROOT"

set -x

./docker/npm install
./docker/npm run bootstrap
./docker/npm run build

docker-compose up -d db

sleep 3

docker-compose exec -T db psql -U contember contember < ./docker/pg-setup.sql

./docker/console update
./docker/console setup

echo "Put the token above into docker-compose.override.yaml > services > admin > environment > LOGIN_TOKEN"
echo "Then start the application using docker-compose up -d"
