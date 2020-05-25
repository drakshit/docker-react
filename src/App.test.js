import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing after adding a span', () => {
  const span = document.createElement('span');
  span.setAttribute('id','span1');
  ReactDOM.render(<App />, span);
});