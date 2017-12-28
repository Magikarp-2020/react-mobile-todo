import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Index from './routes/Index/index';
import Test from './routes/Test/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
