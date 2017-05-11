const webpackMerge = require('webpack-merge');
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
    module: {
      rules: [{
        test: /\.js$/,
        include: resolve(__dirname, '..', 'src'),
        loader: 'babel-loader',
        options: {
          babelrc: false, // Tells webpack not to use the .babelrc file.
          presets: [
            ['env', { targets: { electron: 1.6 }, modules: false }],
            'stage-2',
          ],
        },
      }]
    },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
    ],
  });
