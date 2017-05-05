
//.. old way of constructing query strings 
// from InstrumentSearchPage
  getInstrumentSearchResults() {
    event.preventDefault();

    var name = this.state.name;
    var family = this.state.family;
    var clef = this.state.clef;
    var url = '?';

    if(name) {
      var newURL = `name=${name}`;
      url = url+newURL;
    }

    if(family){
      var newURL = `family=${family}`;
      url = url+newURL;
    }

    if(clef){
      var newURL = `&clef=${clef}`;
      url = url+newURL;
    }

    fetch('api/search'+url)
    .then(function(response) { 
      return response.json();
    })
    .then(results => {
      this.updateResults(results);
      console.log(results);
    });

  }



import React from 'react';
import InstrumentSearchForm from '../components/InstrumentSearchForm';
import InstrumentSearchResults from '../components/InstrumentSearchResults';

export default class InstrumentSearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      families:[],
      clefs:[],
      results: []
    };
  }
  updateResults(results) {
    this.setState({
      results: results
    });     
  }
  getInstrumentSearchResults(form) {
    //fires when user submits form
    //constructs query string params with form values
    //fetch API call to query database for search results
    //stores results in container's state   
    const construct = require('qs-hash');
    var url = `?${construct.qsString(form, 'noencode')}`;
    fetch('api/search'+url)
      .then(response => { 
        return response.json();
      })
      .then(results => {
        this.updateResults(results);
      })
      .catch(err => {
        console.log(err);
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
          results={this.state.results}
          getInstrumentSearchResults={this.getInstrumentSearchResults}
          updateResults={this.updateResults.bind(this)}
        />
        <hr />
        <InstrumentSearchResults
          results={this.state.results}
        />
      </div>  
    );
  }
}




