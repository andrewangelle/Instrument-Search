import React from 'react';

//--------------------------------
//  To Do:
//--------------------------------
//
//  -onSubmit cb() needs to reference function in parent component
//
//--------------------------------

export default class AdminCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.state={
      instrument: {}
    }
  }

  handleChange(event) {
    this.setState({
      ...this.state.instrument,
      [event.targe.name]:[event.target.value]
    })
  }

  render(){	
    return(  
      <div>
          <form onSubmit={event => {
            event.preventDefault();
            this.props.createNewInstrument(this.state.instrument);
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
                   value="Create New Instrument" 
                   />
          </form>       
      </div>
    );
  }
}  