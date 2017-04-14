import React, { Component } from 'react';

export default class InstrumentSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      family: '',
      clef: '',
      instruments:[
      {
        name: 'Violin',
        family: 'Strings',
        clef: 'Treble'
      },
      {
        name: 'Tuba',
        family: 'Brass',
        clef: 'Bass'        
      },
      {
        name: 'Oboe',
        family: 'Woodwinds',
        clef: 'Treble'        
      },
      {
        name: 'Piano',
        family: 'Percussion',
        clef: 'Grand Staff'        
      }      
      

      ]
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
          <li> {instrument.name} </li>
        )}
      </ul>
    </div>
    );
  }
}