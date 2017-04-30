  
//Admin Create Page
  createNewInstrument(instrument) {
    var name = this.state.currentInstrument.name;
    var family = this.state.currentInstrument.family;
    var clef = this.state.currentInstrument.clef;
    var sounds = this.state.currentInstrument.sounds;
    var transposes = this.state.currentInstrument.transposes; 

    event.preventDefault();


  fetch(`/api/instrument/create?name=${name}&family=${family}&clef=${clef}&sounds=${sounds}&transposes=${transposes}`)
      .then( () => {
      console.log("instrument created")
     });

  }

    createNewInstrument(instrument) {
    fetch('/api/instrument/create', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(instrument)
    })
    .then(function() {
      console.log('updated');
    });
  }


//InstrumentSearchPage
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
    
    else {
      
    }

    console.log(url);

    //inject the query string param into the fetch url for the api call
    //convert db response to json
    //log and update results
    fetch('api/search'+url)
    .then(function(response) { 
      return response.json();
    })
    .then(results => {
      this.updateResults(results);
      console.log(results);
    });

  }