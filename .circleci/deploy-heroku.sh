#!/bin/bash

echo "Deploy app - $1"

git add dist -f

git push git@heroku.com:$1.git `git subtree split --prefix dist master`:$CIRCLE_SHA1:refs/heads/master --force
