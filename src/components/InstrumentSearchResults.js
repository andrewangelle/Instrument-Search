import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './style.css';

export default class InstrumentSearchResults extends Component {
  constructor(props){
    super(props);
    this.state={
      results: props.results,
    };
  }
  render() {
      return (
        <Media>
          {this.props.results.map(instrument => 
            <Media body
                   key={instrument.id}
                  >
              <Media heading>
                {`${instrument.name}`}
              </Media>
              {`
                (Family:${instrument.family})
                (Reads:${instrument.clef} Clef)
                (Sounds at:${instrument.sounds})
                (Transposes by and interval of:${instrument.transposes})
              `}
            </Media>
          )}
        </Media> 
      );
    }
  }  




 