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

  const renderedResults = results.map((result) => {
    return (
      // JSX code -> the list.
      <div key={result.pageid} className='item'>
        <div className='content'>
          <div className='header'>{result.title}</div>
          {/* Hidden feature in React to hide span tags from user - don't show in UI. 
          We are using a long prop name to create object we assign a strange looking key of __html  */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
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
