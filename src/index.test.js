import React from 'react';
import ReactDOM from 'react-dom';
import InstrumentSearch from './InstrumentSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstrumentSearch />, div);
});
