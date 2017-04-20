import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import InstrumentSearch from './InstrumentSearch';
import InstrumentAdmin from './Admin'

const InstrumentApp = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Search</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={InstrumentSearch}/>
      <Route path="/Admin" component={InstrumentAdmin}/>
    </div>
  </Router>
)

export default InstrumentApp;