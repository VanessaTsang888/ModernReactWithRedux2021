import React from 'react';

// The search bar:
// Handle user input, need to make use of component level state.
// Define my render function.
// Text input attribute inside of the form elements

class SearchBar extends React.Component {
    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;