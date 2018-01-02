import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Index from './routes/Index/index';
import My from './routes/My/index';
import New from './routes/New/index';
import Detail from './routes/Detail/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/my" exact component={My} />
        <Route path="/new" exact component={New} />
        <Route path="/detail/:id" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
