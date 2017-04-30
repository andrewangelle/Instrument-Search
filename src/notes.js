  
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
