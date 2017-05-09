const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const { resolve } = require('path');

const webpackCommon = require('./base.conf');

const outputDir = resolve(__dirname, '..', 'app', 'dist');

module.exports = webpackMerge(webpackCommon,
  {
    target: 'electron-main',
    // devtool: 'eval',
    entry: {
      app: './app/main/index.js',
    },
    output: {
      path: outputDir,
      filename: 'main.js',
      // path: resolve(outputDir, 'main'),
      // filename: 'index.js'
    },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
    ],
});
