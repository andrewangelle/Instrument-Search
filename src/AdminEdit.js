import React from 'react';

//---------
//Todo: 4/25
//---------
//
//  program form's onSubmit to handle instrument update: fetch(/api/update)
//
//  progrfam onClick to handle delete: fetch(/api/delete) 
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

  saveChanges(event) {
    var id = this.props.match.params.id;
    var name = this.state.currentInstrument.name;
    var family = this.state.currentInstrument.family;
    var clef = this.state.currentInstrument.clef;
    var sounds = this.state.currentInstrument.sounds;
    var transposes = this.state.currentInstrument.transposes; 

    fetch(`/api/instrument/update?id=${id}&name=${name}&family=${family}&clef=${clef}&sounds=${sounds}&transposes=${transposes}`)
      .then(function() {
        console.log('updated');
      });
  }

  deleteInstrument(event) {

  }

  componentDidMount() { 
  // make fetch calls
  // convert responses to json
  // update the individual entries in rendered form with all possible options
  
    var id = this.props.match.params.id;

    fetch(`/api/search?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(results => {
        console.log(results);
        this.updateCurrentInstrument(results[0]);
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
    console.log(this.state.currentInstrument.name)
  	return(
  	  <div>
          <form onSubmit={this.saveChanges.bind(this)}>
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
        <button onClick={this.deleteInstrument.bind(this)}
          >Delete Instrument
        </button>
      </div>  
  	);
  }
}