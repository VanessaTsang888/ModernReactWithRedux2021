import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [term]);

  // This renderedResults variable will be the result of doing this map() method on results.
  // Take a look at every kind of result that we got back and build out a list out of them.
  // Inside of map statement return a div with className of item.
  const renderedResults = results.map((result) => {
    return (
      // JSX code -> the list.
      // The pageid key prop is from the response we get back which we can find when we Inspect the UI -> Network tab -> Preview.
      <div key={result.pageid} className='item'>
        <div className='content'>
          {/* Print out the title of the article we've fetched. */}
          <div className='header'>{result.title}</div>
          {/* Print the summary of article which is the snippet. */}
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            // e is short for element.
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
      {/* Display the renderedResults here insode this jsx. */}
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
