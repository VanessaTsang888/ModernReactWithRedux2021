import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  // Do not mark useEffect function with async as this will give us Error when we inspect the UI.
  useEffect(() => {
    // Declare a helper function and call it immediately using this: search()
    const search = async () => {
      await axios.get('past the url to the external server here');
    };

    search();
  }, [term]);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
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
