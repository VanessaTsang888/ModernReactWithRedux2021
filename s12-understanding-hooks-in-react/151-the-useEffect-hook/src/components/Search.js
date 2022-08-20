import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  /*********************************************************************************************************
To make use of useEffect inside of our component, we call useEffect and provide an arrow function as the
first argument this must always to a function. Then write code inside of this fn which will auto executes
at sometime in the future. Now config it to tell it when we want this code to be executed - tell useEffect
which one of these scenarious we want to have this arrow fn to be executed in we need to provide a second 
argument to useEffect. This controls when our code get executed. This second argument could be either an
empty array, an array with a value in it or no array at all - we only have these 3 options. In our case
we are going with option 3 - when the term piece of state changes.
 ************************************************************************************************************/
  useEffect(() => {
    console.log('some randon text');
  }, [term]);

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
