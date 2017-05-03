import React from 'react';

export default class InstrumentSearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form: {}
    }
  }
  handleChange(event) {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }
  render() {
    return (
     <div> 
      <form onSubmit={event => {
      	event.preventDefault();
      	this.props.getInstrumentSearchResults(this.state.form);
      }}>
        <label>
          Name:
          <input type="text"
          		 name="name"
          		 value={this.state.form.name}
          		 onChange={this.handleChange.bind(this)} 
          		/>
        </label>
        <br />
        <br />
        <label>
          Family:
          <select type="dropdown"
          		  name="family"
          		  value={this.state.form.family}
          		  onChange={this.handleChange.bind(this)}
                >
            <option></option>
            {this.props.families.map(family =>
            <option key={family}>{family}</option>
            )}
          </select>
        </label>
        <br />
        <br />
        <label>
          Clef:
          <select type="dropdown"
          		  name="clef"
          		  value={this.state.form.clef}
          		  onChange={this.handleChange.bind(this)}
          		  >
            <option></option>  
            {this.props.clefs.map(clef =>
            <option key={clef}>{clef}</option>
            )}          		
          </select>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}
