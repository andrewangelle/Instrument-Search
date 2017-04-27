import React, { Component } from 'react';


//------------------------
//  To Do:
//-----------------------
//
//    -incorporate QS lib for query string parameters
//
//------------------------


export default class InstrumentSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      family: '',
      clef: '',
      instruments:[]
    };

    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(results) {
    this.setState({instruments: results});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleFamilyChange(event) {
    this.setState({family: event.target.value});
  }

  handleClefChange(event) {
    this.setState({clef: event.target.value});
  }
  handleSubmit(event) {
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
    
    else {
      
    }

    console.log(url);

    //inject the query string param into the fetch url for the api call
    //convert db response to json
    //log and update results
    fetch('api/search'+url)
    .then(function(response) { 
      return response.json();
    })
    .then(results => {
      this.updateResults(results);
      console.log(results);
    });

  }
  render() {
    return (
     <div> 
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
        </label>
        <br />
        <br />
        <label>
          Family:
          <select type="dropdown" value={this.state.family} onChange={this.handleFamilyChange.bind(this)}>
            <option></option>
            <option value="Strings">Strings</option>
            <option value="Brass">Brass</option>
            <option value="Woodwinds">Woodwinds</option>
            <option value="Percussion">Percussion</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Clef:
          <select type="dropdown" value={this.state.clef} onChange={this.handleClefChange.bind(this)}>
            <option></option>
            <option value="Treble">Treble</option>
            <option value="Bass">Bass</option>
            <option value="Grand Staff">Grand Staff</option>
            <option value="Alto">Alto</option>
          </select>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      
        <ul>
          {this.state.instruments.map(instrument =>
            <li key={instrument.id}> 
              <button>{instrument.name}</button>
            </li>        
          )}
        </ul>
    </div>
    );
  }
}