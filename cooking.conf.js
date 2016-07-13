var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/main.js',
    vendor: ['vue']
  },
  dist: './dist',
  // template: './src/index.tpl',
  template: {
    '../index.html': './src/index.tpl'
  },

  devServer: {
    port: 8080,
    log: false,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: 'vendor',
  publicPath: '/dist',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
