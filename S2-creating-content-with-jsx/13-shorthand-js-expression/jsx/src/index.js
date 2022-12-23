/* This file is the first to get executed when we run our React App. */
/* This is where we write some code to create a component and show on the screen or UI. */

// 1) Import the React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root. el is abbreviated for element.
const el = document.getElementById("root");

// 3) Tell React to take control of that element.
const root = ReactDOM.createRoot(el);

// 4) Create a component.
/*
    1. Use braces to write out an expression directly inside of our JSX.
    Printout the current time on the screen using the date Object.
*/

function App() {
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}

// 5) Show the component on the screen by calling root.render and pass in App component.

root.render(<App />);

// For me the logic is simple, the msg displayed on screen will depend on the num returned by the predefined method.
