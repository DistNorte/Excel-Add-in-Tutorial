"use strict";

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ["es2016"]
          }
          
        }
    ]
  }
};
node: {
  fs: 'empty'
};
externals: [
{
  './cptable': 'var cptable'
}]