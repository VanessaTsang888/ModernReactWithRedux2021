/***********************************************************************************

2. Since I have written the SearchBar component, at the top of this file I can now 
import that at the top of this file.

App component -> return keyword -> jsx block: instead of showing the App text 
inside of the <div> tag, I change that to show the <searchBar> component

I write the export default statement at the bottom so that other files can use
this component.

**********************************************************************************/

import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
