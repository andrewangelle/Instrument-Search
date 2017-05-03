import React from 'react';
import InstrumentSearchForm from '../components/InstrumentSearchForm';

export default class InstrumentSearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      families:[],
      clefs:[],
      searchResults: []
    };
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }
  updateSearchResults(results) {
        this.setState({
          searchResults: results
        });    
  }
  getInstrumentSearchResults(form) {
    //fires when user submits with form values
    //constructs query string params
    //queries database
    //stores results in container's state   
    const construct = require('qs-hash');
    var url = `?${construct.qsString(form, 'noencode')}`;
    fetch('api/search'+url)
      .then(response => { 
        return response.json();
      })
      .then(results => {
        console.log(results);
      });
  }
  componentDidMount() {
    //before render
    //Fetch from database all potential values for user form inputs 
    //then store in container's state 
    fetch('/api/families')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          families: results
        });
      });
    fetch('/api/clefs')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          clefs: results
        });
      });    
  }
  render() {
    return(
      <div>
        <InstrumentSearchForm
          families={this.state.families}
          clefs={this.state.clefs}
          getInstrumentSearchResults={this.getInstrumentSearchResults}
        />
        <hr />
      </div>  
    );
  }
}