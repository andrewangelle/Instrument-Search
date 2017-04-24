import React from 'react';

export default class AdminEdit extends React.Component {
  constructor(props){
  	super(props);

  	  this.state={
        currentInstrument:"",
      	allFamilies: [],
      	allClefs: [],
      	allSounds: [],
      	allTransposes: []
    }

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

  componentDidMount() { 
  // make fetch calls
  // convert responses to json
  // update the individual entries in rendered form with all possible options
  
  //var name = {match.params.id}
    fetch('/api/families')
      .then(response => {
        return response.json()
      })
      .then(results => {
        console.log(results);
        this.updateFamilyDropdown(results);
      });
    fetch('/api/clefs')
      .then(response => {
        return response.json()
    })
      .then(results => {
        console.log(results);
        this.updateClefDropdown(results);
    });
    fetch('/api/sounds')
      .then(response => {
        return response.json()
    })
      .then(results => {
        console.log(results);
        this.updateSoundsDropdown(results);
    });
    fetch('/api/transposes')
      .then(response => {
        return response.json()
    })
      .then(results => {
        console.log(results);
        this.updateTransposesDropdown(results);
    });              
  }  


  render(){
  	return(
  	  <div> 
          <form>
            <label>
              Name:
              <input type="text" value=""/> 
            </label>
          <br />
          <br />
            <label>
              Family:
              <select type="dropdown" value="placeholder">
                <option value="placeholder"></option>               
                {this.state.allFamilies.map(oneFamily => 
                <option>{oneFamily}</option>
                )}               
              </select>
            </label>
          <br />
          <br />
            <label>
              Clef:
              <select type="dropdown" value="placeholder">
                <option value="placeholder"></option>              
                {this.state.allClefs.map(oneClef => 
                <option>{oneClef}</option>
                )}
              </select>  
            </label>
          <br />
          <br />
            <label>
              Sounds:
              <select type="dropdown" value="placeholder">
                <option value="placeholder"></option>              
                {this.state.allSounds.map(oneSound => 
                <option>{oneSound}</option>
                )}                
              </select>
            </label>
          <br />
          <br />
            <label>
              Transposes:
              <select type="dropdown" value="placeholder">
                <option value="placeholder"></option>              
                {this.state.allTransposes.map(oneTranspose => 
                <option>{oneTranspose}</option>
                )}               
              </select>
            </label>
          <br />
          <br />
            <input type="submit" value="Save Changes" />
        </form>

        <button>Delete Instrument</button>
      </div>  
  		);
  }

}