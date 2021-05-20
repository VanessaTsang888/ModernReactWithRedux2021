// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Click on me!';
// }


// Create a react component

const App = () => {
    // L21: Create new variable, use it inside of button tag instead of using the plain text of Submit. Uses a pair of braces to say: I want to use JS
    // variable here.
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {/* name of variable I want to insert into this button. This will display the Click Me btn.
                I want to reference a JS variable for this style within the btn tag. And the value I want to pass-in is the JS object: buttonText.
                */}
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show on screen
ReactDOM.render(
  <App />,
   document.querySelector('#root')
);




