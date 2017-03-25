/**
 * Created by terencelimzw on 26/12/16.
 */

import React from 'react';
import { Router, Route } from 'react-router';

import App from '../lib/containers/Module'
import About from '../lib/components/AboutPage';
import Main from '../lib/containers/AppShell';
import NotFound from '../lib/components/NotFoundPage';

const Routes = (props) => (
  <Router {...props}>
    <Route component={Main}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;