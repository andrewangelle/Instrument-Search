import React from 'react';

//---------
//Todo: 4/24
//---------
//  setup onChange handlers for form inputs
//
//  need to map order of events for updating the state of currentInstrument
//    look up "object spread" to setState on a single key/value pair nested inside
//    an object (currentInstrument)
//
//  setup form's onSubmit to handle instrument update: fetch(/api/update)
//
//  setup onClick to handle delete: fetch(/api/delete) 
//------------

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
        transposes: "",
        id:""
    }

    this.updateId = this.updateId.bind(this);
    this.updateCurrentInstrument = this.updateCurrentInstrument.bind(this);
    this.updateTransposesDropdown = this.updateTransposesDropdown.bind(this);
    this.updateSoundsDropdown = this.updateSoundsDropdown.bind(this);
    this.updateFamilyDropdown = this.updateFamilyDropdown.bind(this);
    this.updateClefDropdown = this.updateClefDropdown.bind(this);  
  }

  updateId(results) {
    this.setState({id: results})
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

  handleChange(event) {
    this.setState({id: event.target.value})
  }

  componentDidMount() { 
  // make fetch calls
  // convert responses to json
  // update the individual entries in rendered form with all possible options
  var id = this.props.match.params.id;
  console.log (id)

    fetch(`/api/search?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(results => {
        console.log(results);
        this.updateId(results);
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
                <option >{singleFamily}</option>
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
                <option >{singleClef}</option>
                )}
              </select>  
            </label>
          <br />
          <br />
            <label>
              Sounds:
              <select type="dropdown" value={this.state.sounds}>
                <option></option>              
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
                <option></option>              
                {this.state.allTransposes.map(singleTranspose => 
                <option key={this.props.children}>{singleTranspose}</option>
                )}               
              </select>
            </label>
          <br />
          <br />
            <label>
              ID: will be hidden..
              <input type="text" value={this.state.id} />
            </label>
          <br />  
          <input type="submit" value="Save Changes" onChange={this.handleChange.bind(this)} />
        </form>

        <button>Delete Instrument</button>
        <hr />

        <h4>{this.state.currentInstrument}</h4>
      </div>  
  		);
  }

}