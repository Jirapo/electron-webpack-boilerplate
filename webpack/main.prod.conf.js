const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const { resolve } = require('path');

const webpackCommon = require('./base.conf');

const outputDir = resolve(__dirname, '..', 'app');


module.exports = webpackMerge(webpackCommon,
  {
    target: 'electron-main',
    entry: {
      main: './src/main/index.js',
    },
    output: {
      path: outputDir,
      filename: 'main.js',
    },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new BabiliPlugin(),
    ],
});
