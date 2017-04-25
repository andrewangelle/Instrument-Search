import React from 'react';

//Todo:
//setup onChange handlers for form inputs
//
//"object spread" to setState on a single key/value nested inside
//an object (currentInstrument)
//
//setup form's onSubmit to handle instrument update: fetch(/api/update)
//
//setup onClick to handle delete: fetch(/api/delete)   
export default class AdminEdit extends React.Component {
  constructor(props){
  	super(props);

  	  this.state={
        currentInstrument:[],
      	allFamilies: [],
      	allClefs: [],
      	allSounds: [],
      	allTransposes: [],
        name: "",
        family: "",
        clef: "",
        sounds: "",
        transposes: ""
    }

    this.updateCurrentInstrument = this.updateCurrentInstrument.bind(this);
    this.updateTransposesDropdown = this.updateTransposesDropdown.bind(this);
    this.updateSoundsDropdown = this.updateSoundsDropdown.bind(this);
    this.updateFamilyDropdown = this.updateFamilyDropdown.bind(this);
    this.updateClefDropdown = this.updateClefDropdown.bind(this);  
  }
  updateTransposesDropdown(results){
    this.setState({allTransposes: results});
  }
  updateSoundsDropdown(results) {
    this.setState({allSounds: results});
  }
  updateFamilyDropdown(results) {
  	this.setState({allFamilies: results});
  }
  updateClefDropdown(results) {
    this.setState({allClefs: results});
  }
  updateCurrentInstrument(results) {
    this.setState({currentInstrument: results})
  }  

  componentDidMount() { 
  // make fetch calls
  // convert responses to json
  // update the individual entries in rendered form with all possible options
  var id = this.props.match.params;

    fetch(`/api/search?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.updateCurrentInstrument(results);
      });
    fetch('/api/families')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.updateFamilyDropdown(results);
      });
    fetch('/api/clefs')
      .then(response => {
        return response.json()
    })
      .then(results => {
        this.updateClefDropdown(results);
    });
    fetch('/api/sounds')
      .then(response => {
        return response.json()
    })
      .then(results => {
        this.updateSoundsDropdown(results);
    });
    fetch('/api/transposes')
      .then(response => {
        return response.json()
    })
      .then(results => {
        this.updateTransposesDropdown(results);
    });             
  }  

  render(){
  	return(
  	  <div>
          <form>
            <label>
              Name:
              <input type="text"/> 
            </label>
          <br />
          <br />
            <label>
              Family:
              <select type="dropdown" value={this.state.family}>
                <option></option>               
                {this.state.allFamilies.map(singleFamily => 
                <option>{singleFamily}</option>
                )}               
              </select>
            </label>
          <br />
          <br />
            <label>
              Clef:
              <select type="dropdown" value={this.state.clef}>
                <option></option>              
                {this.state.allClefs.map(singleClef => 
                <option>{singleClef}</option>
                )}
              </select>  
            </label>
          <br />
          <br />
            <label>
              Sounds:
              <select type="dropdown" value={this.state.sounds}>
                <option value="placeholder"></option>              
                {this.state.allSounds.map(singleSound => 
                <option>{singleSound}</option>
                )}                
              </select>
            </label>
          <br />
          <br />
            <label>
              Transposes:
              <select type="dropdown" value={this.state.transposes}>
                <option value="placeholder"></option>              
                {this.state.allTransposes.map(singleTranspose => 
                <option>{singleTranspose}</option>
                )}               
              </select>
            </label>
          <br />
          <br />
            <label>
              ID: will be hidden..
              <input type="text" value="" />
            </label>
          <br />  
          <input type="submit" value="Save Changes" />
        </form>

        <button>Delete Instrument</button>
      </div>  
  		);
  }

}