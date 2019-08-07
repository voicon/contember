#!/usr/bin/env sh
set -e

SYMLINKS=$(find ./instances/*/*/node_modules -maxdepth 2 -type l)

for SYMLINK in $SYMLINKS; do
	REALPATH=$(readlink -f $SYMLINK)
	rm $SYMLINK
	cp -RL $REALPATH $SYMLINK
done

find ./instances/*/*/node_modules -type d -name typescript -exec rm -rf "{}" +
rm -rf ./instances/*/admin/node_modules/resolve-url-loader/tmp
