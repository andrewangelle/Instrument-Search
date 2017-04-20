import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { hashHistory } from 'react-router'
import InstrumentSearch from './InstrumentSearch';


export default class InstrumentApp extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
          <Route path="/" component={InstrumentSearch} />
      </Router>      
    );
  }  
}
