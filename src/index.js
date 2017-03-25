import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import Routes from './routes/routes';


import './index.css';
import './fonts/font.css';


ReactDOM.render(
  <Routes history={hashHistory} />,
  document.getElementById('root')
);
