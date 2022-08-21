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
      <div key={result.pageid} className='item'>
        {/* btn for each result (on the list) for user to go to the corrisponding article. */}
        <div className='right floated content'>
          <a
            className='ui button'
            // Take user to a particular page. Templating uses back-ticks not single quotes.
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
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
