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


class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value); // Getting value from our user. Using colsole log to test in my developer tools -> Console.
    }
    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" onChange={this.onInputChange} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;