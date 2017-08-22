import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';
import * as webpack from 'webpack';
import base from './renderer.base.config.babel';

export default webpackMerge(base, {
  devServer: {
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    port: 9000,
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      '__isDev__': JSON.stringify(true),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../static/index.ejs'),
    }),
  ],
});
