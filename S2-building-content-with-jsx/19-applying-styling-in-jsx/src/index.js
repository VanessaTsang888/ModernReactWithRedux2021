// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component.
/**************************************************************************************
To convert HTML snippets to the equivalent JSX, its a 5 step
process. 
Stept 2: When we specify a number in html attribute we provide it as a String.
To convert into JSX, we use braces. If we don't then we'll get
a consol log warning in browser, so follow this rule.
Step 3: Boolean 'true' can be written with just the prop name. In the UI, I
type text of: recieve but its not underlined in red in Chrome. However, works as expected in Fire Fox.

'False' should be written with braces. In the UI this will not underline text
in red even there is a typo.
Step 4: For JSX use className as prop name rather than class which is HTML attributes.
step 5: I only get the blue border when I click on the input field. Is this expected?
****************************************************************************************/
function App() {
  return <input spellCheck />;
  // return <div className="divider" />;
  // return <input style={{ border: '1px sold blue' }} />;
}

// 5) Show the component on the screen
root.render(<App />);
