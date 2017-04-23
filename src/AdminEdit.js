import React from 'react';

export default class AdminEdit extends React.Component {
  constructor(props){
  	super(props);

  	  this.state={
      	allFamilies: [],
      	allClefs: [],
      	allSounds: [],
      	allTransposes: []
    }

    this.updateFamilyDropdown = this.updateFamilyDropdown.bind(this);  
  }

  updateFamilyDropdown(results) {
  	this.setState({allFamilies: results});
  }

  componentDidMount() {
  //Promise.All 
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
              <select type="dropdown">
                {this.state.allFamilies.map(family => 
                <option>{family}</option>
                )}
              </select>
            </label>
          <br />
          <br />
            <label>
              Clef:
              <select type="dropdown">
                <option>{this.state.allClefs}</option>
              </select>
            </label>
          <br />
          <br />
            <label>
              Sounds:
              <select type="dropdown">
                <option>{this.state.allSounds}</option>
              </select>
            </label>
          <br />
          <br />
            <label>
              Transposes:
              <select type="dropdown" >
                <option>{this.state.allTransposes}</option>
              </select>
            </label>
          <br />
          <br />
            <input type="submit" value="Submit" />
        </form>
      </div>  
  		);
  }

}