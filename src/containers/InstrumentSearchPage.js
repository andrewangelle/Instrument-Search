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
      form: props.form,
      families:[],
      clefs:[],
      searchResults:[]
    };
  }
  getInstrumentSearchResults() {
    var form=this.state.form;

    console.log(`${form}`)
  }

  componentDidMount(){
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
          <div>
            <ul>
            {this.state.searchResults.map(instrument =>
              <li key={instrument.id}> 
                <button>{instrument.name}</button>
              </li>        
            )}
          </ul>        
        </div>  
      </div>  
    );
  }
}