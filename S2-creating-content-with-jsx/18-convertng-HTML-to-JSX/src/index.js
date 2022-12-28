// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component.
/*********************************************************
The auto focus prop takes a Boolean value
and will give the input feild a blue keyline.

To convert HTML snippets to the equivalent JSX, its a 5 step
process. Prop name -> lower Camel-cased.
***********************************************************/
function App() {
  return <textarea autoFocus={true} />;
}

// 5) Show the component on the screen
root.render(<App />);
