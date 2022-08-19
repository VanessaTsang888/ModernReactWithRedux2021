import React, { useState } from 'react';

/*
 Search component that return a h1 that displays 'Search' to the user.
 Using the className to use the styling from Semanic ui library.
 Inside the label tag is just a little plain text to show user where to enter their search term.
 Input tag allows user to click inside of the search input.
*/
const Search = () => {
  // New piece of state called: term. Provide a default value of empty string.
  const [term, setTerm] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          {/* Wire-up term and setTerm to the value prop and the onChange prop of the input element/tag. */}
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
