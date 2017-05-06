import React, { Component } from 'react';
import { SplitButton,
         MenuItem } from 'react-bootstrap';

export default class InstrumentSearchResults extends Component {
  constructor(props){
    super(props);
    this.state={
      results: props.results,
    };
  }
  render() {
    return (
      <div>
        {this.props.results.map(instrument => 
          <SplitButton bsStyle="primary"
                      title={instrument.name}
                      key={instrument.id}>
            <MenuItem key={instrument.family}>{instrument.family}</MenuItem>
            <MenuItem key={instrument.clef}>{instrument.clef}</MenuItem>
            <MenuItem key={instrument.sounds}>{instrument.sounds}</MenuItem>
            <MenuItem key={instrument.transposes}>{instrument.transposes}</MenuItem>
          </SplitButton>
        )}
      </div>
    );
  }  
}




 