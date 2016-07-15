var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/main.js',
    vendor: ['vue']
  },
  dist: './dist',
  template: {
    '../index.html': './src/index.tpl'
  },

  devServer: {
    enable: false
  },

  // production
  clean: true,
  hash: true,
  chunk: 'vendor',
  publicPath: './dist',
  assetsPath: '/dist',
  urlLoaderLimit: 100000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
