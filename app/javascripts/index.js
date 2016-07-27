import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';

window.addEventListener('load', () => {
  ReactDOM.render(<Root />, document.getElementById('app'));
});
