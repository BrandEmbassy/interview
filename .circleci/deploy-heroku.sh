#!/bin/bash

echo "Deploy app - $1"

git config --global user.email vavdav@post.cz

rm .gitignore
git add dist
git commit -m "add dist"

git subtree push --prefix=dist git@heroku.com:$1.git $CIRCLE_SHA1:refs/heads/master
