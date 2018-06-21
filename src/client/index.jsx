import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';


export default render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root'),
);
