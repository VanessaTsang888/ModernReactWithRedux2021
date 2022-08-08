/*
A little blog app.

*/

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hi there!</div>;
  // return;
};
// Render the App inside of the document, find same div with an id of root.
ReactDOM.render(<App />, document.querySelector('#root'));
