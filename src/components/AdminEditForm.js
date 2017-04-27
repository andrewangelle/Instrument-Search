import React from 'react';

//-------------
//  To Do:
//-------------
//
//    -user needs to be navigated back to /admin after editing
//     or deleting instrument
//
//-----------------


export default class AdminEditForm extends React.Component {
  constructor(props){
  	super(props);

    this.state = {
      instrument: props.instrument
    }
  }

  handleChange(event) {
    this.setState({
      instrument: {
        ...this.state.instrument,
        [event.target.name]: event.target.value
      }
    })
  }

  render(){
  	return(
  	  <div>
          <form onSubmit={event => {
            event.preventDefault();
            this.props.updateInstrument(this.state.instrument);
          }}>
            <label>
              Name:
              <input type="text"
                     name="name"
                     value={this.state.instrument.name}
                     onChange={this.handleChange.bind(this)} 
                     />
            </label>
              <br />
              <br />
            <label>
              Family:
              <select type="dropdown"
                      name="family"
                      value={this.state.instrument.family}
                      onChange={this.handleChange.bind(this)}
                      >               
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
                      value={this.state.instrument.clef}
                      onChange={this.handleChange.bind(this)}
                      >            
                {this.props.clefs.map(clef => 
                <option key={clef}>{clef}</option>
                )}
              </select>  
            </label>
              <br />
              <br />
            <label>
              Sounds:
              <select type="dropdown"
                      name="sounds"
                      value={this.state.instrument.sounds}
                      onChange={this.handleChange.bind(this)}
                      >            
                {this.props.sounds.map(sound => 
                <option key={sound}>{sound}</option>
                )}                
              </select>
            </label>
              <br />
              <br />
            <label>
              Transposes:
              <select type="dropdown"
                      name="transposes"
                      value={this.state.instrument.transposes}
                      onChange={this.handleChange.bind(this)}
                      >             
                {this.props.transposes.map(transpose => 
                <option key={transpose}>{transpose}</option>
                )}               
              </select>
            </label>
              <br />
            <input type="submit"
                   value="Save Changes" 
                   />
          </form>
        <button onClick={event => {
          event.preventDefault();
          this.props.deleteInstrument(this.state.instrument.id);
        }}
          >Delete Instrument
        </button>       
      </div>  
  	);
  }
}
