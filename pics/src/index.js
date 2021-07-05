import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Normally here we would create App component but this time we do things differently.
// Show the App component on screen:
// the 'root' is inside of the index.html file.

ReactDOM.render(<App />, document.querySelector('#root')
);

