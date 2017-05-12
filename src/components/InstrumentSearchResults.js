import React, { Component } from 'react';
import { ListGroup,
         ListGroupItem } from 'reactstrap';
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
        <ListGroup>
          {this.props.results.map(instrument => 
          <ListGroupItem key={instrument.id}>
            {`
              ${instrument.name} 
              ${instrument.family}
              ${instrument.clef}
              ${instrument.sounds}
              ${instrument.transposes}
            `}
          </ListGroupItem>
          )}
        </ListGroup>  
      );
    }
  }  




 