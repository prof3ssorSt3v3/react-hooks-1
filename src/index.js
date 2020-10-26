import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//npx create-react-app hooks1

// import App from './App.class'; // React v16 - used Classes for components
import App from './App'; // React v17 - uses Functions for components

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
