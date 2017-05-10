// plase don't import electron here

import is from 'electron-is';
import { join } from 'path';


export const isDev = is.dev();

export const APP_PATH = isDev ? join(process.cwd(), 'app') : join(process.resourcesPath, 'app');

