	fetchInstruments() {

		fetch('/api/search?')
    	.then(function(response) {
      		return response.json();
    		})
    	.then(function(results) {
      		this.updateInstrumentArray(results);
    		});

	}

this.updateInstrumentArray = this.updateInstrumentArray.bind(this);

	updateInstrumentArray(results) {
		this.setState({ instruments: results })
	}


//-------------------------------

