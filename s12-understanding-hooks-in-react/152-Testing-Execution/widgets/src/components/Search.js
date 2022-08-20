import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  // Will run when term piece of state changes.
  console.log('I RUN WITH EVERY RENDER');

  // Run this function on Search component if term changes.
  // Its all about the second argument.
  useEffect(() => {
    console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
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
