
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from './HomePage';
import NextPage from './NextPage';

const history = createHistory();

ReactDOM.render(
      <Router history={history} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/next" component={NextPage} />
        </Switch>      
      </Router>, 

	document.getElementById('root')
);  

