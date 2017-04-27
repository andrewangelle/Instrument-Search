import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import InstrumentSearchPage from './InstrumentSearchPage';
import AdminHomePage from './AdminHomePage';
import AdminEditPage from './AdminEditPage';
import AdminCreatePage from './AdminCreatePage';


const history = createHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history} > 
        <div>
          <Switch>
            <Route exact path="/" component={InstrumentSearchPage} />
            <Route exact path="/admin" component={AdminHomePage} />
            <Route exact path="/admin/edit/:id" component={AdminEditPage} />
            <Route exact path="/admin/create" component={AdminCreatePage} />           
          </Switch> 
        </div>     
      </Router>
    );  
  }  
}
