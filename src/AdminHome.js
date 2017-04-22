import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch 
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import InstrumentSearch from './InstrumentSearch';
import AdminEdit from './AdminEdit';


const history = createHistory();

export default class AdminHome extends React.Component {
  constructor(props){
    super(props);

    this.state={
      instruments: []
    };

    this.updateResults = this.updateResults.bind(this);

  }
  updateResults(results) {

    this.setState({instruments: results});

  }
  componentDidMount() {

    fetch('api/search?')
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.updateResults(results);
        console.log(results);
      });
  }
  render(){
  return(
    <Router history={history} >
      <div>
        <ul>
          <li><Link to="/search">Search</Link></li>
        </ul>

      <hr/>


        <ul>
          {this.state.instruments.map(instrument =>
          <li key={instrument.id}> 
            <button>
              {instrument.name}
            </button>
          </li>        
          )}
        </ul>

      <hr/>
          <Switch>
            <Route exact path="/search" component={InstrumentSearch} />
            <Route exact path="/edit" component={AdminEdit} />
          </Switch>   
    </div>     
      </Router>   
  );
  }
}





