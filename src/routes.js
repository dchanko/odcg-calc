import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Calc from './containers/Calc.react';
import About from './containers/About.react';

export default (
  <Route path="/">
    <IndexRoute component={Calc}/>
    <Route path="about" component={About}/>
  </Route>
);
