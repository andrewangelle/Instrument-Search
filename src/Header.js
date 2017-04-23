import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	render() {
	  return (
	  	<div>
		  <ul>
		    <li><Link to="/home">Home</Link></li>
		    <li><Link to="/search">Search</Link></li>
		    <li><Link to="/admin">Admin</Link></li>
		  </ul>

		  <hr/>
		    <h3>Header w/ Nav</h3>
		  <hr/>
		</div> 
	  );
	}
}