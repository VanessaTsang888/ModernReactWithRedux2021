// Create a component and show it on a screen.

/************************************************************************************************** 
1. Import the React and ReatDOM libraries.
- React: Library that defines what a component is and how multiple components work toggether.
2. ReactDOM: Library that knows how to get a component to show up in the browser
(ReactNative is for mobile Apps which we are not learning on this course). We need the below x2 
libraries to show a simple App inside the browser.
**************************************************************************************************/
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Get a reference to the div with ID root/index.html file.
const el = document.getElementById("root");

// 3. Tell React to take control of that element -> el.
const root = ReactDOM.createRoot(el);

// 4. Create a component. Define a func called App and return a simple h1 element that renders a String of "Hi there".
function App() {
  return <h1>Hi there! 你好</h1>;
}

// 5. Show the component on the screen. Get the render from the root and pass in App as the JSX element.
root.render(<App />);
