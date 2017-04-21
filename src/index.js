
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from './HomePage';
import NextPage from './NextPage'
import AdminHome from './AdminHome';

const history = createHistory();

ReactDOM.render(
      <Router history={history} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/next" component={NextPage} />
          <Route exact path="/admin" component={AdminHome} />
        </Switch>      
      </Router>, 

	document.getElementById('root')
);  

