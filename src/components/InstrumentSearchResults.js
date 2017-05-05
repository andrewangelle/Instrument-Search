import React from 'react';

export default class InstrumentSearchResults extends React.Component {
  constructor(props) {
  	super(props);
  	this.state={
  		results: props.results
  	};
  }
  	render() {
  	  return (
  	  	<div>
        {this.props.results.map(instrument => 
          <button key={instrument.id}>
            {instrument.name}
          </button>
        )}
  	  	</div>
  	  );
  	}
  
}