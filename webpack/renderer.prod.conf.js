const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const { resolve } = require('path');

const webpackCommon = require('./base.conf');

const outputDir = resolve(__dirname, '..', 'app', 'dist');

module.exports = webpackMerge(webpackCommon,
  {
    target: 'electron-renderer',
    bail: true,
    entry: {
      renderer: './app/renderer/index.js',
      vendor: './app/renderer/vendor.js',
    },
    output: {
      path: resolve(outputDir, 'renderer'),
      filename: '[name]-[chunkhash].min.js',
      chunkFilename: '[chunkhash].js'
    },
    // externals: {
    //   electron: 'electron',
    // },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new CleanWebpackPlugin(['renderer'], {
        root: outputDir,
        // exclude: ['index.html']
      }),
      new CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
        minChunks: Infinity
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
