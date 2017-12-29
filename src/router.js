import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Index from './routes/Index/index';
import My from './routes/My/index';
import New from './routes/New/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/my" exact component={My} />
        <Route path="/new" exact component={New} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
