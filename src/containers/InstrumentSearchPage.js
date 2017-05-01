import React from 'react';
import InstrumentSearchForm from '../components/InstrumentSearchForm';

//------------------------
//  To Do:
//-----------------------
//
//    -incorporate QS lib for query string parameters
//
//    -make Results its own component
//    -resolve QSparams....again
//
//------------------------


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
  getInstrumentSearchResults(form) {
    const queryString = require('query-string');
    var url = `?${queryString.stringify(form)}`

    fetch('api/search'+url)
    .then(response => { 
      return response.json();
    })
    .then(results => {
      console.log(results[0]);
    });
  }

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