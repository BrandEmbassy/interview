#!/bin/bash

echo "Deploy app - $1"

git add dist -f
git commit -m "add dist"

git push -f git@heroku.com:$1.git $CIRCLE_SHA1:refs/heads/master
