import dva from 'dva';
import './index.css';
import { installModel } from './models/index';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/fixBar'));
installModel(app);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
