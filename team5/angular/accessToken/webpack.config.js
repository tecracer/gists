// ./webpack.config.js
var webpack = require('webpack');
var path = require('path');

// not the full webpack config, only the required parts to work
module.exports = {
    context: path.join(__dirname, './src'),
    entry: "./index.js",
    output: {
      path: path.join(__dirname, './public'),
      filename: "./bundle.[hash].js"
    },
   resolve: {
    alias: {
      config: path.join(__dirname, './config', `${process.env.NODE_ENV}.js`)
    }
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
