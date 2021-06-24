import React from 'react';

// Use styling from: https://semantic-ui.com/elements/loader.html
// For better UX whilst we get approval to get user's location.
// The message property is inside the Spinner component now.
const Spinner = (props) => {
    return (
        <div className="ui active dimmer" >
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// Define defaultProps on the Spinner function. This will be an object that will provide some default props to this component in case in the future we forget to provide a message into the prop when
// we create an instance of this Spinner.
// In the future if we don't pass-in a message in to the props, then this default message of 'Loading...' will be used.
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;


