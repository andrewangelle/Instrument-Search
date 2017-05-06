
//.. old way of constructing query strings 
// from InstrumentSearchPage
  getInstrumentSearchResults() {
    event.preventDefault();

    var name = this.state.name;
    var family = this.state.family;
    var clef = this.state.clef;
    var url = '?';

    if(name) {
      var newURL = `name=${name}`;
      url = url+newURL;
    }

    if(family){
      var newURL = `family=${family}`;
      url = url+newURL;
    }

    if(clef){
      var newURL = `&clef=${clef}`;
      url = url+newURL;
    }

    fetch('api/search'+url)
    .then(function(response) { 
      return response.json();
    })
    .then(results => {
      this.updateResults(results);
      console.log(results);
    });

  }

//how do i define different render components.
import React from 'react';

export default class InstrumentSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      results: props.results
      isInfoDisplayed: false
    };
  }
  handleClick(event) {
    this.setState({
      results: !this.state.isInfoDisplayed
    });
  }
  render() {
    const isInfoDisplayed = this.state.isInfoDisplayed;

    let resultsbutton = null;

    if (isInfoDisplayed) {
      <ResultsInfo />
    }
    else {
      <ResultName />
    }
    return (
      <div>
        <ul>{resultsListItem}</ul>
      </div>
    );
  }
}

function ResultName(props) {
  return(
    <div>
      {this.props.results.map(instrument => 
        <button key={instrument.id}>
          {instrument.name}
        </button>
      )}
    </div>    
  ); 
}

function ResultsInfo(props) {
  return(
    {this.props.results.map(instrument => 
      <button key={instrument.id}>
        {instrument.family}
      </button>
    )}
);
   
}

