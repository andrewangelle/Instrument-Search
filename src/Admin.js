import React from 'react';

export default class InstrumentAdmin extends React.Component {

	constructor(props) {
		super(props);

    	this.state = {
      		name: '',
      		family: '',
      		clef: '',
      		instruments:[]
    	};

    	this.updateInstrumentArray = this.updateInstrumentArray.bind(this);
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
		this.fetchInstruments().bind(this);
	}

	render() {
		return (
		  <div>
      		<ul>
        		{this.state.instruments.map(instrument =>
          		<li key={instrument.id}> 
              		<button>{instrument.name}</button>
          		</li>        
        		)}
      		</ul>
      	  </div>
		);
	}
}