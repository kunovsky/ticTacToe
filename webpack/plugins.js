var path = require('path');
var util = require('util');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var pkg = require('../package.json');

var commonBundle = path.join('js', util.format('common.%s.js', pkg.version));
var cssBundle = path.join('css', util.format('app.%s.css', pkg.version));

var plugins = [];

plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),

  new ExtractTextPlugin(cssBundle, {
    allChunks: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.CommonsChunkPlugin(commonBundle),
  new webpack.NoErrorsPlugin()
);

module.exports = plugins;
