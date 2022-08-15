/***********************************************************************************

Lecture 78:
2. Since I have written the SearchBar component, at the top of this file I can now 
import that at the top of this file.

App component -> return keyword -> jsx block: instead of showing the App text 
inside of the <div> tag, I change that to show the <searchBar> component

I write the export default statement at the bottom so that other files can use
this component.

Lecture 79:

AFter testing in UI, the search bar is stretched too far. To add some space on left
and right:

  return statement -> div -> add a className of ui container
  This is in the Semantic UI library.

To add space above the search bar:
  Write another attribute: jsx -> div -> an Object: style={{ marginTop: '10px' }}   

**********************************************************************************/

import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SearchBar />
    </div>
  );
};

export default App;
