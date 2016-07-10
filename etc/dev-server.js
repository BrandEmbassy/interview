// This file runs the development web server.
// It uses the hot-reloading feature of webpack.

var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config.dev');

const port = 3000;
const app = express();
const compiler = webpack(config);

var WebpackDevMiddleware = require('webpack-dev-middleware');
var webpackDevMiddleware = WebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});

app.use(webpackDevMiddleware);

app.use(require('webpack-hot-middleware')(compiler));

// This handler kicks in when router takes in a deeper url
app.get('*', function response(req, res) {
  res.write(webpackDevMiddleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
  res.end();
});

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