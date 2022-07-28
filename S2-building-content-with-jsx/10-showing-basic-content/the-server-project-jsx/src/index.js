/* This file is the first to get executed when we run our React App. */
/* This is where we write some code to create a component and show on the screen or UI. */

// 1) Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root. el is abbreviated for element.
const el = document.getElementById('root');

// 3) Tell React to take control of that element.
const root = ReactDOM.createRoot(el);

// 4) Create a component.
function App() {
  return <h1>Hi there!</h1>;
}

// 5) Show the component on the screen by calling root.render and pass in App component.
// to run the app i have installed node modules at the root of the project directory and use the cmd: npm start.
// I got the Hi there! message or data on the screen as expected. Now I have a basic component displayed on screen in 5 steps.

root.render(<App />);
