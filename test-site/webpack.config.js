/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const libraryName = pkg.name;
const outputFile = libraryName + '.js';

const config = {
  mode: 'production',
  entry: __dirname + '/src/index.js',
  devtool: 'inline-source-map',
  optimization: {
    minimize: false
  },
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  devServer: {
    open: true,
    contentBase: [path.join(__dirname, './'), path.join(__dirname, 'dist'), path.join(__dirname, '..')],
  },
  plugins: []
};

module.exports = config;
