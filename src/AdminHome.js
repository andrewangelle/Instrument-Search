import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminHome extends React.Component {
  constructor(props){
    super(props);

    this.state={
      instruments: []
    };
    
    this.displayDataBaseEntries = this.displayDataBaseEntries.bind(this);
  }

  displayDataBaseEntries(results) {
    this.setState({instruments: results});
  }

  componentDidMount() {
    fetch('api/search?')
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.displayDataBaseEntries(results);
        console.log(results);
      });
  }

  class 
      
  render(){
    return(
      <div>
        <ul>
          {this.state.instruments.map(instrument =>
            <li key={instrument.id}> 
              <Link to="/admin/edit/:id">
                <button>
                  {instrument.name}
                </button>
              </Link>
            </li>        
          )}
        </ul>
      </div> 
    );  
  }
}





