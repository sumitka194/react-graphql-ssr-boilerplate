import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/Home';

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export const allRoutes = [
  '/',
];

export default Routes;
