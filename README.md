Contact List Documentation
===

Run with:
---

* npm install
* npm start
* Open localhost:3000 in browser.

_The dev server uses in-memory built assets so it is not supposed to emit anything_
_to the file system._
_See `etc/webpack.config.dev.js` for more details_


First attempt for a production build script:
---
* npm run build

_This emits files into the ./dist folder._
_See `etc/webpack.config.js` for more details_

Dev environment considerations:
---

* TypeScript compiler could be setup to be invoked as part of webpack and watch the folder.
  I generally prefer it to be invoked manually from the IDE to have the type checking
  before webpack does the rest automatically, but it could be changed easily. 
* There is a vscode setup for the TypeScript build task provided, any other IDE can be easily
  setup to run "node_modules/.bin/tsc" from the root directory.
* I've used webpack to import less styles experimentally. As a result there is a delay between
  page rendering and style loading in Chrome due to the style being resolved in JS.
  I don't quite like this and probably would drop it eventually. That would require to modify the
  build scripts to deploy styles differently.

Things that should be done going further:
---

* Isolating non-dev package dependencies and saving into package.json
* Running tests also as part of build 
* Resolve duplication in webpack.config.js and webpack.config.dev.js
* Using Immutable.js to enforce immutability of the state
* When persisting data on a server, we'd need a better id generation technique. 
* Phone number handling should be smarter. Now it doesn't handle international numbers and doesn't
  reflect locales.
* Routes use magic constants heavily, those should be extracted into one place
* Id passed to route doesn't affect the app state. This it not neccessarilly a practical problem
  but it is a violation of the sinlge state object principle.
* The build process could use linting to check on things like semicolons, console usage, etc.
* Actions are not strongly typed. Currently redux complains when passing something that's not a basic
  object which makes the typing more difficult.
* Highlighting the selected contact is missing. In order for this to work we need to change the way
  the router is setup so the ContactList component also receives updates.