import React from 'react';
import AdminCreateForm from './AdminCreateForm';

//-------------
//	To Do:
//-------------
//
//	  -default values of dropsdowns needs to be set to blank
//
//-----------------

export default class AdminCreatePage extends React.Component {
  constructor(props){
  	super(props);

  	  this.state={
      	families: [],
      	clefs: [],
      	sounds: [],
      	transposes: [],
    }


  createNewInstrument(instrument) {
    fetch('/api/instrument/create', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(instrument)
    })
    .then(function() {
      console.log('updated');
    });
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
        this.setState({
          clefs: results
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