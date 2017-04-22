import React from 'react';

export default class AdminEdit extends React.Component {
  constructor(props){
  	    super(props);

      this.state={
      	instruments: []
    }

    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(results) {

    this.setState({instruments: results});

  }
  componentDidMount() {

  //Promise.All 
  // make fetch calls
  // convert responses to json
  // update the individual entries in rendered form with all possible options

    fetch('url')
      .then(response => {

      })
      .then(results => {

      });

  }

  componentWillReceiveProps() {
  	//get ahold of id passed from AdminHome 
  	//set value of form field with the:
  	//
  	//.name/.family/.clef/.sounds/.transposes
  	// that match the id props from previous event

  }

  render(){
  	return(
  	  <div> 
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input type="text" value="PropsToBePassed" />
          </label>
        <br />
        <br />
          <label>
            Family:
            <select type="dropdown" value="PropsToBePassed">
              <option></option>
            </select>
          </label>
        <br />
        <br />
          <label>
            Clef:
            <select type="dropdown" value="PropsToBePassed">
              <option></option>
            </select>
          </label>
        <br />
        <br />
          <label>
            Sounds:
            <select type="dropdown" value="PropsToBePassed">
              <option></option>
            </select>
          </label>
        <br />
        <br />
          <label>
            Transposes:
            <select type="dropdown" value="PropsToBePassed">
              <option></option>
            </select>
          </label>
        <br />
        <br />
          <input type="submit" value="Submit" />
      </form>

  		);
  }

}