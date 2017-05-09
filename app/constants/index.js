import is from 'electron-is';
// import { app } from 'electron';
import { join } from 'path';

export const isDev = is.dev();

// export const APP_PATH = isDev ? join(process.cwd(), 'app') : app.getAppPath();
// export const APP_PATH = join(process.cwd(), 'app');
// console.log(APP_PATH);

