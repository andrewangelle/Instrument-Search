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
        currentInstrument:{},
      	allFamilies: [],
      	allClefs: [],
      	allSounds: [],
      	allTransposes: [],
    }

    
    this.updateCurrentInstrument = this.updateCurrentInstrument.bind(this);
    this.updateTransposesDropdown = this.updateTransposesDropdown.bind(this);
    this.updateSoundsDropdown = this.updateSoundsDropdown.bind(this);
    this.updateFamilyDropdown = this.updateFamilyDropdown.bind(this);
    this.updateClefDropdown = this.updateClefDropdown.bind(this);  
  }

  updateCurrentInstrument(results) {
    this.setState({currentInstrument: results});
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


  handleNameChange(event) {
    this.setState({
      currentInstrument: {
        ...this.state.currentInstrument,
        name: event.target.value
      }
    })
  }

  handleFamilyChange(event) {
    this.setState({
      currentInstrument: {
        ...this.state.currentInstrument,
        family: event.target.value
      }
    })
  }

  handleClefChange(event) {
    this.setState({
      currentInstrument: {
        ...this.state.currentInstrument,
        clef: event.target.value
      }
    })
  }

  handleSoundsChange(event) {
    this.setState({
      currentInstrument: {
        ...this.state.currentInstrument,
        sounds: event.target.value
      }
    })
  }

    handleTransposesChange(event) {
    this.setState({
      currentInstrument: {
        ...this.state.currentInstrument,
        transposes: event.target.value
      }
    })
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
              <input type="text"
                     value={this.state.currentInstrument.name}
                     onChange={this.handleNameChange.bind(this)} 
                     /> 
            </label>
              <br />
              <br />
            <label>
              Family:
              <select type="dropdown"
                      value={this.state.currentInstrument.family}
                      onChange={this.handleFamilyChange.bind(this)}
                      >               
                {this.state.allFamilies.map(singleFamily => 
                <option key={singleFamily}>{singleFamily}</option>
                )}               
              </select>
            </label>
              <br />
              <br />
            <label>
              Clef:
              <select type="dropdown" 
                      value={this.state.currentInstrument.clef}
                      onChange={this.handleClefChange.bind(this)}
                      >            
                {this.state.allClefs.map(singleClef => 
                <option key={singleClef}>{singleClef}</option>
                )}
              </select>  
            </label>
              <br />
              <br />

            <label>
              Sounds:
              <select type="dropdown"
                      value={this.state.currentInstrument.sounds}
                      onChange={this.handleSoundsChange.bind(this)}
                      >            
                {this.state.allSounds.map(singleSound => 
                <option key={singleSound}>{singleSound}</option>
                )}                
              </select>
            </label>
              <br />
              <br />

            <label>
              Transposes:
              <select type="dropdown"
                      value={this.state.currentInstrument.transposes}
                      onChange={this.handleTransposesChange.bind(this)}
                      >             
                {this.state.allTransposes.map(singleTranspose => 
                <option key={singleTranspose}>{singleTranspose}</option>
                )}               
              </select>
            </label>

              <br />
            <input type="submit"
                   value="Save Changes" 
                   />
          </form>
        <button>Delete Instrument</button>
      </div>  
  		);
  }

}