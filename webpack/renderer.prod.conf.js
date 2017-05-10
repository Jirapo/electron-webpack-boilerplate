const webpackMerge = require('webpack-merge');
const BabiliPlugin = require('babili-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

const { resolve } = require('path');

const webpackCommon = require('./base.conf');

const outputDir = resolve(__dirname, '..', 'app');

module.exports = webpackMerge(webpackCommon,
  {
    target: 'electron-renderer',
    bail: true,
    entry: {
      renderer: './src/renderer/index.js',
    },
    output: {
      path: resolve(outputDir, 'renderer'),
      filename: '[name].min.js',
    },
    // externals: {
    //   electron: 'electron',
    // },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new DllReferencePlugin({
        manifest: require(resolve(outputDir, 'renderer', 'vendor.json')),
        sourceType: 'var',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(__dirname, '../static/index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new BabiliPlugin(),
    ],
});
