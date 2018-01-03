import dva from 'dva';
import './index.css';
import { installModel } from './models/index';

const app = dva();

installModel(app);

app.router(require('./router'));

app.start('#root');
