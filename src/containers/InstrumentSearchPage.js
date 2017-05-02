import React from 'react';
import InstrumentSearchForm from '../components/InstrumentSearchForm';


export default class InstrumentSearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      families:[],
      clefs:[],
      searchQuery: {},
      searchResults:{}
    };
  }

//fire when user submits form
//then fetch search results from database
//then store in this.state
  updateSearchResults(results) {
    this.setState({searchQuery: results});
  }
  getInstrumentSearchResults(form) {
    const construct = require('qs-hash');
    var url = `?${construct.qsString(form, 'noencode')}`;
    fetch('api/search'+url)
      .then(response => { 
        return response.json();
      })
      .then(results => {
        this.updateSearchResults;
        console.log(results);
      });


  }

//Fetch from database 
//all potential values 
//then store in this.state 
  componentDidMount() {
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