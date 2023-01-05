import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get our el. Read our root. Render our App component that is inside of the root.
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
