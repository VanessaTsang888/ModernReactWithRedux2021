import React from 'react';
import SearchBar from './SearchBar';

// To make search feild less than full width:
//   <div className="ui container">


const App = () => {
    return (
        <div className="ui container" style={{ marginTop: '20px'}}>
            <SearchBar />
        </div>
    );
};

export default App;