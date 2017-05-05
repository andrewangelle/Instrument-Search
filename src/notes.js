
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



