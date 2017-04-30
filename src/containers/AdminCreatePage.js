import React from 'react';
import AdminCreateForm from '../components/AdminCreateForm'

//-------------
//	To Do:
//-------------
//
//	  -if logic to render "..Loading until dropdowns populate"
//
//-----------------

export default class AdminCreatePage extends React.Component {
  constructor(props){
  	super(props);

  	  this.state={
        newInstrument: {},
      	families: [],
      	clefs: [],
      	sounds: [],
      	transposes: []
    }
}

  createNewInstrument(instrument) {
    this.setState({
      newInstrument: instrument 
    })
  }

  componentDidMount() { 
  // make fetch calls
  // convert responses to json
  // update the individual entries in rendered form with all possible options
  
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

    fetch('/api/sounds')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          sounds: results
        });
      });
      
    fetch('/api/transposes')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          transposes: results
        });
      });             
  }  

  render(){
  	return(
      <div>
        <AdminCreateForm
          instrument={this.state.instrument}
          families={this.state.families}
          clefs={this.state.clefs}
          sounds={this.state.sounds}
          transposes={this.state.transposes}
          updateInstrument={this.updateInstrument}
          deleteInstrument={this.deleteInstrument} 
        />
      </div>
  	);
  }
}