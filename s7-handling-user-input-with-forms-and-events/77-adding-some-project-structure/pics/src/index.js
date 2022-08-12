import React from 'react';
import ReactDOM from 'react-dom';
// Once we have create the App.js component file, we write the import statement as below.
import App from './components/App';

// We have a separate file for the App component rather than having it inside of a
// indext.js file. So we don't need to define the App component here.
// Show the App component on the screen.
// Pass a reference of id root.
ReactDOM.render(<App />, document.querySelector('#root'));
