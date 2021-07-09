import React from 'react';
import SearchBar from './SearchBar';

// To make search feild less than full width:
//   <div className="ui container">
// Each time the search bar is submitted, onSubmit property will run this fn.
// Tested and found now my term in the input logs out from this App component as expected



class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px'}}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
            </div>
        );
    }  
}

export default App;