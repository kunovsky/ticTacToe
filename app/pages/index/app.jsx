import '../../index.html';
import '../../scss/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import _ from 'lodash'; //eslint-disable-line

import IndexWrapper from './routes/IndexWrapper/IndexWrapper';
import Board from './routes/Board/Board';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={IndexWrapper}>
      <IndexRoute component={Board} />
    </Route>
  </Router>
  ),
  document.getElementById('app')
);
