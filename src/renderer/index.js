import dva from 'dva';
import RouterConfig from './router';
import { APP_PATH } from 'constants-nowa';


import 'antd/dist/antd.min.css';
import './assets/app.less';
// console.log(APP_PATH);

// 1. Initialize
const app = dva({
  onError(e) {
    console.error(e);
  },
});

app.router(RouterConfig);

app.start('#root');


