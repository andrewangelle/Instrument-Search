import React from 'react';

export default class AdminEdit extends React.Component {
  constructor(props){
  	    super(props);

      this.state={
      	name:"",
      	allFamilies: [],
      	allClefs: [],
      	allSounds: [],
      	allTransposes: [],
      	instruments: []
    }

    this.updateResults = this.updateResults.bind(this);
  
  }
  updateResults(results) {

    this.setState({instruments: results});

  }
  handleSubmit(event){
  
  	event.preventDefault;
  
  }
  componentDidMount() {
  //Promise.All 
  // make fetch calls
  // convert responses to json
  // update the individual entries in rendered form with all possible options
  
  //var name = {match.params.id}

    Promise.All([
     //fetch(`/api/search?name=${name}`)
      fetch('/api/families'),
	  fetch('/api/clefs'),
      fetch('/api/sounds'),
      fetch('/api/transposes')
    ])
      .then(responses => {
      	return Promise.all([
      	  responses[0].json(),
      	  responses[1].json(),
      	  responses[2].json(),
		  responses[3].json(),
		  responses[4].json()
		 ]);
	})
      .then(results => {
      	console.log(results);
      });





  }

  componentWillReceiveProps() {
  	//get ahold of id passed from AdminHome 
  	//set value of form field with the:
  	//f
  	//.name/.family/.clef/.sounds/.transposes
  	// that match the id props from previous event

  }

  render(){
  	return(
  	  <div> 
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Name:
              <input type="text"/> 
            </label>
          <br />
          <br />
            <label>
              Family:
              <select type="dropdown">
                <option>{this.state.allFamilies}</option>
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