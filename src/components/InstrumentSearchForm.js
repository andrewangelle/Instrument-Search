import React from 'react';
import './style.css';
import { Button,
         Form,
         FormGroup,
         Label,
         Input } from 'reactstrap';

export default class InstrumentSearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form: {}
    };
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
        <Form onSubmit={event => {
                         event.preventDefault();
                         this.props.getInstrumentSearchResults(this.state.form);
                        }}>
          <FormGroup>
            <Label>Name</Label>
              <Input name="name"
                     value={this.state.form.name}
                     onChange={this.handleChange.bind(this)}
                     className="form-input search" 
                    >
              </Input>    
          </FormGroup>
          <FormGroup>
            <Label>Family</Label>
            <Input type="select"
                   name="family"
                   value={this.state.form.family}
                   onChange={this.handleChange.bind(this)}
                   className="form-input search"
                  >
              <option></option>
              {this.props.families.map(family =>
              <option key={family}>{family}</option>
              )}              
            </Input>
          </FormGroup>
            <FormGroup>
            <Label>Clef</Label>
            <Input type="select"
                   name="clef"
                   value={this.state.form.clef}
                   onChange={this.handleChange.bind(this)}
                   className="form-input search"
                  >
              <option></option>
              {this.props.clefs.map(clef =>
              <option key={clef}>{clef}</option>
              )}              
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>        
      </div>
    );
  }
}
