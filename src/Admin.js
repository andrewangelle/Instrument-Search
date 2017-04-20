import React from 'react';

export default class InstrumentAdmin extends React.Component {

	constructor(props) {
		super(props);

    	this.state = {

      		instruments:[]
    	};

    	this.updateInstrumentArray = this.updateInstrumentArray.bind(this);
      this.fetchInstruments = this.fetchInstruments.bind(this);
	};

	updateInstrumentArray(instruments) {
		this.setState({ instruments: instruments})
	}

	fetchInstruments() {

		fetch('/api/search')
    	.then(function(response) {
      		return response.json();
    		})
    	.then(function(instruments) {
      		this.updateInstrumentArray(instruments);
    		});

	}

	componentDidMount(){
		this.fetchInstruments();
	}

	render() {
		return (
		  <div>
          <h4>I am working</h4>
      </div>
		);
	}
}