/*
2.
import react from react library.
import react dom from react-dom.
import the App component.



*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Render App component and show it inside of document.querySelector() -> the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
