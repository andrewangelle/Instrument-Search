
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import InstrumentSearch from './InstrumentSearch';

export default class Home extends React.Component {
	render(){
		return(
			<InstrumentSearch />
		);
	}
}

ReactDOM.render(
      <Router history={ hashHistory }>
        <Route path="/" component={Home} />      
      </Router>, 
  
	document.getElementById('root')
);  

