//  import libraries and the App component.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get a reference to the element (el) inside the DOM that I want to render my app into.
// Find an element with an id of 'root'.
const el = document.getElementById("root");
// Create our root
const root = ReactDOM.createRoot(el);

// Render this App component inside our root.
root.render(<App />);
