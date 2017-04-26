import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import InstrumentSearch from './InstrumentSearch';
import AdminHome from './AdminHome';
import AdminEdit from './AdminEdit';
import NextPage from './Placeholder';


const history = createHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history} > 
        <div>
          <Switch>
            <Route exact path="/" component={InstrumentSearch} />
            <Route exact path="/admin" component={AdminHome} />
            <Route exact path="/admin/edit/:id" component={AdminEdit} />
            <Route exact path="/admin/create" component={NextPage} />           
          </Switch> 
        </div>     
      </Router>
    );  
  }  
}