import React, { Component } from 'react';

export default class InstrumentSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      family: '',
      clef: '',
      instruments:[ ]
    };
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

    //get form values and user input
    const { name,family,clef,instruments } = this.state;
    console.log({name},{family},{clef},{instruments});

    //construct query string param


    //inject the query string param into the url for api call
    //convert response to json
    //update this.state.instruments with results
    fetch(`api/search?name=${name}`)
    .then(function(response) { 
      return response.json();
    })   
    .then(function(results) {
      console.log(results)
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
            <option value="Placeholder"></option>
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
            <option value="Placeholder"></option>
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
          <li> {this.instruments.state.name} </li>
        )}
      </ul>
    </div>
    );
  }
}