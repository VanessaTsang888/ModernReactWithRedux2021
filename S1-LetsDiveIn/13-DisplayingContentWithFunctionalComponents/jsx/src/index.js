// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

/*

Create a new react function based component:

const App = function() {
  return <div>Hi there!</div> 
};

*/


// Can also be written like this using the arrow fn rather than using the fn keyword.
const App = () => {
  return <div>Hi there Vanessa baby!</div>; // return a little JSX
};




// 3 steps to go through to get some content to appear on our browser:
// Take the react component and show it on the screen.
// Open up a Fn call, take the App component and put in JSX or HTML tag. The second argument will be a DOM element that exist inside of the
// HTML file that's inside the public folder. Ref to the 'root' in the HTML file. Pass this as the 2nd argument to the React DOM render callback 
// inside of this index.js file.
ReactDOM.render(
<App />, document.querySelector('#root')
);
