import React, { Component } from 'react';

export default class InstrumentSearchResults extends Component {
  constructor(props){
    super(props);
    this.state={
      results: props.results,
      nameIsDisplayed: true
    };
  }
  handleClick(event) {
    this.setState({
      nameIsDisplayed: !this.state.nameIsDisplayed
    });
  }
  render() {
    const { nameIsDisplayed } = this.state

    if (nameIsDisplayed) {
      return (
        <div>
          {this.props.results.map(instrument => 
            <button key={instrument.id}
                    onClick={this.handleClick.bind(this)}
                    >
              {instrument.name}
            </button>
          )}
        </div>
      )
    }
    else {
      return(
        <div>
          {this.props.results.map(instrument => 
            <button key={instrument.id}
                    onClick={this.handleClick.bind(this)}
                    >
              {instrument.family}
            </button>
          )}
        </div>   
      );
    }
  }
}



 