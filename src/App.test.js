import React from 'react';
import ReactDOM from 'react-dom';
import MonkeySpaceApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MonkeySpaceApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
