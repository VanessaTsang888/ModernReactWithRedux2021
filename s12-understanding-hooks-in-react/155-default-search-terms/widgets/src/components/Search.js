import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  // Provide an initial search term of programming.
  const [term, setTerm] = useState('programming');
  // Since the results state will be an Arrayi of objects, when our component first render
  // on screen we use a default value of an empty string.
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      // Take the data out of the response we receive
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      // Use data to update our results piece of state and provide data.
      // This will cause our component to auto rerender so we can then access the
      // results array down inside of our jsx block and render out our list.
      // During initial request we have results. The request is then completed. We do a consol log
      // of the rsults piece of state, and we see that we got the array of objects.
      setResults(data.query.search);
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
