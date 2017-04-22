import React from 'react';

export default class AdminHome extends React.Component {
  constructor(props){
		super(props);

		this.state={
			instruments: [ ]
		};

		this.updateResults = this.updateResults.bind(this);

	}
  updateResults(results) {

    this.setState({instruments: results});

  }
  handleInstrumentClick(event) {

    console.log('Instrument was clicked')

  }
  componentDidMount() {

    fetch('api/search?')
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.updateResults(results);
        console.log(results);
      });
  }

	render(){
		return(
		  <div>
        <ul>
          {this.state.instruments.map(instrument =>
          <li key={instrument.id}> 
            <button onClick={this.handleInstrumentClick.bind(this)}>{instrument.name}</button>
          </li>        
        	)}
      	</ul>
			</div>
		);
	}
}

