/*
Network tab within Inspect shows: initial request has already been issued as when we first render our component 
to the screen our useEffect function is going to be invoked.

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      // axios.get() method with link to the Wikipedia website
      await axios.get('https://en.wikipedia.org/w/api.php', {
        // Second arguement is the params object and asign it an object with multiple key-pair-values.
        // Axios will take the key-pair-values and code them into a query string and append on to the end of the url automatically.
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          // Our term piece of state. This is what we want to search for.
          srsearch: term,
        },
      });
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
