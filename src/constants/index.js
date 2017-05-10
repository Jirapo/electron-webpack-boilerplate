// plase don't import electron here

const is = require('electron-is');
const { join } = require('path');

const isDev = is.dev();
const APP_PATH = isDev ? join(process.cwd(), 'app') : join(process.resourcesPath, 'app');

module.exports = {
  isDev,
  APP_PATH
};



