#!/usr/bin/env sh
set -e

SYMLINKS=$(find ./mangoweb/*/node_modules -maxdepth 1 -type l)

for SYMLINK in $SYMLINKS; do
	REALPATH=$(readlink -f $SYMLINK)
	rm $SYMLINK
	cp -RL $REALPATH $SYMLINK
done

find mangoweb/*/node_modules -type d -name typescript -exec rm -rf "{}" +
rm -rf mangoweb/admin/node_modules/resolve-url-loader/tmp
