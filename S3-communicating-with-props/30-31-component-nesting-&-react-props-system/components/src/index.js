// Component Nesting:

import React from 'react';
import ReactDOM from 'react-dom';
// import the faker library to use their content.
import faker from 'faker';
// To show the CommentDetail component inside of our app. Its in the same folder hence the one period and slash.
// No need to the file extension as Webpack will find .js files for us.
import CommentDetail from './CommentDetail';

if (module.hot) {
  module.hot.accept();
}

/* 
We want to render the CommentDetail component inside of our App as that
will form the connection between this file and the CommentDetail file.
To show the CommentDetail component inside of our app -> component nesting.
*/

// No limits to the number of components that we show inside of another.
// Here I'm showing x5 components inside of my App.
// The content is different but the styling is consistent as expected.
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
