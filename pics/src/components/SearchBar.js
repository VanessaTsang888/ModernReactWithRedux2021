import React from 'react';

// The search bar:
// Handle user input, need to make use of component level state.
// Define my render function.
// Text input attribute inside of the form elements.
// We need to react to user's typing in to the search bar so we need a method a the top of the class which will get called anytime user changes any text inside of the input.
// So add new 'prop' into the input element called 'onChange'. Then pass it a reference to the 'onInputChange' method:
// 'onInputChange' is the callback fn. 
// 'this.onInputChange' is the reference to the method called: onInputChnage()
// When we pass the method 'onInputChnage' into the prop 'onChange', it is a 'callback fn' but we don't put a set of parentheses at the end of it.
// We are passing a reference to the callback fn, to the input element so that the input can call that fn sometime in the future.
// The 'event' is a JS object. The 'event.target.value' is the 'prop' that will contain the text the user just added into our 'input'.
// Our 'input' is called 'onChange' which is a specail prop name as different events will be wired to different prop names.
// So, anytime user changes this text input, we use the prop name 'onChange'.

// Refactor to show alternate way to write event handler. Then use it few times.
// Rather than passing a reference to the onInputChange callback fn, replace it with Arrow Function. This is the samething just a abbreviated syntax where we don't need to define a separate method on the class.
// We'll often use Arrow Function anytime we have a single line of code that we want to execute, anytime that some event occurs.

// Initailise a state object, with a single property called 'term' and set it to default to be an empty string.
// Replace the 'onChange' prop with an arrow fn as her last lecture.
// Everytime user types into the input, the state will update using the 'setState'/update the term prop with whatever the current value out of the input is.
// Write new prop 'value' will be equal to this.state.term
// Changing the initialisation of the state term -  Change the default value of the search input - I can render my search bar with some default value inside by adding text inside of the empty string.
// To force user to enter capitalised keys: write '.toUpperCase()' in the value within the onChange property.


class SearchBar extends React.Component {
    state = { term: 'Enter your search term here' };
    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={ this.state.term }
                    onChange={ e => this.setState({ term: e.target.value }) } />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;