import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch 
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import InstrumentSearch from './InstrumentSearch';
import AdminHome from './AdminHome';


const history = createHistory();

export default class HomePage extends React.Component {
  render(){
	return(
	  <Router history={history} >
	    <div>
		  <ul>
		    <li><Link to="/home">Home</Link></li>
		    <li><Link to="/search">Search</Link></li>
		    <li><Link to="/admin">Admin</Link></li>
		  </ul>

		  <hr/>


		  <h3>Header Component With Props</h3>

		  <hr/>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/search" component={InstrumentSearch} />
            <Route exact path="/admin" component={AdminHome} />
          </Switch> 	
		</div>     
      </Router> 	
	);
  }
}