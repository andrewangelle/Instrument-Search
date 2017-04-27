import React, { Component } from 'react';
import AdminEditForm from '../components/AdminEditForm';

export default class AdminEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instrument: null,
      families: [],
      clefs: [],
      sounds: [],
      transposes: []
    }
  }

  componentDidMount() {
    // make fetch calls
    // convert responses to json
    // update the individual entries in rendered form with all possible options
    const { id } = this.props.match.params;

    fetch(`/api/search?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          instrument: results[0]
        });
      });

    fetch('/api/families')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          families: results
        });
      });

    fetch('/api/clefs')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          clefs: results
        });
      });

    fetch('/api/sounds')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          sounds: results
        });
      });

    fetch('/api/transposes')
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          transposes: results
        });
      });
  }

  updateInstrument(instrument) {
    fetch('/api/instrument/update', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(instrument)
    })
    .then(function() {
      console.log('updated');
    });
  }

  deleteInstrument(id) {
    fetch(`/api/instrument/delete/?id=${id}`)
    .then(() => {
      console.log('deleted');
    });
  }

  render() {
    if (!this.state.instrument) {
      return <div>Loading...</div>;
    }

    return (
      <AdminEditForm
        instrument={this.state.instrument}
        families={this.state.families}
        clefs={this.state.clefs}
        sounds={this.state.sounds}
        transposes={this.state.transposes}
        updateInstrument={this.updateInstrument}
        deleteInstrument={this.deleteInstrument}
      />
    );
  }
}
