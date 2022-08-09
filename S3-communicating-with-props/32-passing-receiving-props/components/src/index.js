import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// Use this component in this file.
import CommentDetail from './CommentDetail';

if (module.hot) {
  module.hot.accept();
}

/* 
The value of prop is currently hard coded but will be dynamic later in the child component.
Same prop name but differnt value -> when we provide a prop to a component, alsways going to a unique 
version of that component.
*/
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail author='Sam' />
      <CommentDetail author='Alex' />
      <CommentDetail author='Jane' />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
