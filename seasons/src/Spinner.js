import React from 'react';

// Use styling from: https://semantic-ui.com/elements/loader.html
// For better UX whilst we get approval to get user's location.
const Spinner = () => {
    return (
        <div className="ui active dimmer" >
            <div className="ui big text loader">
                Loading...
            </div>
        </div>
    );
};



export default Spinner;


