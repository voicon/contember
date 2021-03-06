#!/bin/bash
set -euo pipefail

if [[ $VERSION =~ ^v((([0-9]+)\.([0-9]+))\.[0-9]+)((-([a-z]+))\.[0-9]+)?$ ]]; then
  ALL_VERSIONS=( "${BASH_REMATCH[1]}${BASH_REMATCH[5]}" "${BASH_REMATCH[2]}${BASH_REMATCH[6]}" )
  NEWER_MINOR=$((${BASH_REMATCH[4]} + 1))
  REGEX="^v${BASH_REMATCH[3]}\.${NEWER_MINOR}\.[0-9]+"
  if [ "${BASH_REMATCH[7]}" != "" ]; then
    REGEX+="-${BASH_REMATCH[7]}\.[0-9]+"
  fi
  REGEX+="$"
  GIT_TAGS=$(git tag -l)
  NEWER_VERSIONS=$(echo "$GIT_TAGS" | grep -E "$REGEX" || true )
  if [ "${#NEWER_VERSIONS}" -eq 0 ]; then
    ALL_VERSIONS+=( "${BASH_REMATCH[3]}${BASH_REMATCH[6]}" )
  fi
else
  ALL_VERSIONS=( "$VERSION" )
fi

MAIN_VERSION=${ALL_VERSIONS[0]}

REPO="contember/contember"
docker build -t "$REPO:$MAIN_VERSION" -f ./packages/engine-server/alpine.dockerfile .
for VERSION in "${ALL_VERSIONS[@]:1}"
do
  docker tag "$REPO:$MAIN_VERSION" "$REPO:$VERSION"
done
docker push --all-tags "$REPO"

docker build -t "$REPO:$MAIN_VERSION-debian" -f ./packages/engine-server/debian.dockerfile .
for VERSION in "${ALL_VERSIONS[@]:1}"
do
  docker tag "$REPO:$MAIN_VERSION-debian" "$REPO:$VERSION-debian"
done
docker push --all-tags "$REPO"

REPO="contember/cli"
docker build -t "$REPO:$MAIN_VERSION" -f ./packages/cli/Dockerfile .
for VERSION in "${ALL_VERSIONS[@]:1}"
do
  docker tag "$REPO:$MAIN_VERSION" "$REPO:$VERSION"
done
docker tag "$REPO:$MAIN_VERSION" "$REPO:latest"
docker push --all-tags "$REPO"
