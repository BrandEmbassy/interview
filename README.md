# Based on

Este dev stack

## Libraries

- [react](http://facebook.github.io/react/) and [react native](https://facebook.github.io/react-native/)
- [redux](http://rackt.github.io/redux/)
- [babeljs](https://babeljs.io/)
- [immutablejs](http://facebook.github.io/immutable-js)
- [webpack](http://webpack.github.io/)
- [expressjs](http://expressjs.com/)
- [eslint](http://eslint.org/)
- [bluebird](https://github.com/petkaantonov/bluebird) Because it's better than native implementation.
- [AVA](https://github.com/avajs/ava) Futuristic JavaScript test runner.
- [gulp](http://gulpjs.com/) Aren't NPM scripts better? [No](https://twitter.com/jaffathecake/status/700320306053935104).

## Prerequisites

- [node.js](http://nodejs.org) Node 6 with NPM 3 is required.
- [gulp](http://gulpjs.com/) `npm install -g gulp`
- [git](https://git-scm.com/downloads) git cmd tool is required

## Installing

Clone this repo and run

```shell
npm install
```

## Start Development

- run `gulp`
- point your browser to [localhost:9000](http://localhost:9000)

## Dev Tasks

- `gulp` run web app in development mode
- `gulp -p` run web app in production mode
- `gulp ava` run ava unit tests
- `gulp ava-watch` continuous test running for TDD
- `gulp eslint` eslint

## Production Tasks

- `gulp build -p` build app for production
- `npm test` run all checks and tests
- `node src/server` start app, remember to set NODE_ENV and SERVER_URL
