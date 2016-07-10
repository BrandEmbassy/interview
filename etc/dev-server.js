// This file runs the development web server.
// It uses the hot-reloading feature of webpack.

var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config.dev');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // We could use the open module to open the browser window automatically upon run.
    // However I find it more annoying than helpful.
    // open(`http://localhost:${port}`);
    console.log("Done")
  }
});