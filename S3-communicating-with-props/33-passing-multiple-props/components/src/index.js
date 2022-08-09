import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

if (module.hot) {
  module.hot.accept();
}

// Add new prop to each CommentDetail
// In our case its the: timeAgo property with its string value.
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45PM'
        postComment='Vanessa, I like this blog post a lot.'
        // Use prop for image by reference faker which the library has been important at the top of this file.
        // This will generate a link to an image and assign it to the avatar prop that is going to be passed down from the CommentDetail
        avatar={faker.image.image()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 2:00AM'
        postComment='Nice writing style.'
        avatar={faker.image.image()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 5:00PM'
        postComment='Great subject. More please.'
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
