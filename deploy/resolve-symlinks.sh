#!/usr/bin/env sh
set -e

SYMLINKS=$(find ./mangoweb/*/node_modules -maxdepth 1 -type l)

for SYMLINK in $SYMLINKS; do
	REALPATH=$(readlink -f $SYMLINK)
	rm $SYMLINK
	cp -RL $REALPATH $SYMLINK
done
