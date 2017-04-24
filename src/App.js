import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import HomePage from './HomePage';
import InstrumentSearch from './InstrumentSearch';
import AdminHome from './AdminHome';
import AdminEdit from './AdminEdit';


const history = createHistory();

const App = () => (
	  <Router history={history} > 
	    <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={InstrumentSearch} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/edit" component={AdminEdit} />           
        </Switch> 
		  </div>     
    </Router> 	
)

export default App
 
