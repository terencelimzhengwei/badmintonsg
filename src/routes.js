/**
 * Created by terencelimzw on 26/12/16.
 */

import React from 'react';
import { Router, Route } from 'react-router';

import App from './app';
import About from './about';
import Main from './main';

const Routes = (props) => (
  <Router {...props}>
    <Route component={Main}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default Routes;