#!/bin/bash

echo "Deploy app - $1"

[[ ! -s \"$(git rev-parse --git-dir)/shallow\" ]] || git fetch --unshallow

git subtree push --prefix dist git@heroku.com:$1.git $CIRCLE_SHA1:refs/heads/master
