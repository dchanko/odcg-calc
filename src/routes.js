import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './containers/Home.react';
import About from './containers/About.react';

export default (
  <Route path="/">
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
  </Route>
);
