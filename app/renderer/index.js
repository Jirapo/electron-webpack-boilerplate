import dva from 'dva';
import RouterConfig from './router';
import { isDev } from 'constants-nowa';

// 1. Initialize
const app = dva({
  onError(e) {
    console.error(e);
  },
});

app.router(RouterConfig);

app.start('#root');


