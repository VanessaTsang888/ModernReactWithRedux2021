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
/*
    1. Write some computation inside of our compenent to decide what we want to show on the screen. 
    2a. Generate a number using the Math.random() - a predefined method. 
        if the number returned by the method is greater than 0.5, then execute the code in the code body. 
    2b. In our case, if the num is greater than 0.5, then change the message to Hello there! 
        by reference the variable of message - dynamically using a set of braces.
    3. The return statement takes whatever value is inside of the message variable and print it up inside the h1.
    4. Show the component on screen by calling root.render and pass in App component.
*/

function App() {
    let message = 'Bye there!';
    if (Math.random() > 0.5) {
        message = 'Hello there!';
    }

    return <h1>{message}</h1>;
}

// 5) Show the component on the screen by calling root.render and pass in App component.

root.render(<App />);

// For me the logic is simple, the msg displayed on screen will depend on the num returned by the predefined method.
