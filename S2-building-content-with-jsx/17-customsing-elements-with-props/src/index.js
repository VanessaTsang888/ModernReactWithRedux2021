// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component.
/****************************************************************************
This input element is designed to take numbers only and capped to min of 5.
We can have multiple props per element.
In the UI, the browser -> input field -> little arrows: these are the browser
behaviour NOT provided by React.
****************************************************************************/
function App() {
  return <input style={{ border: '3px solid red' }} type='number' min={5} />;
}

// 5) Show the component on the screen
root.render(<App />);
