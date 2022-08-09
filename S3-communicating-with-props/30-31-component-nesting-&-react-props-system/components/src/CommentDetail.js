//  We continue to use the jsx from previous lecture copied from index.js file.
import React from 'react';
// import the faker library to use their content.
import faker from 'faker';

// Using arrow function to create this CommentDetail component with dynamic data rather than hard coded data since each blog will have different data.
const CommentDetail = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.image()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          Sam
        </a>
        <div className='metadata'>
          <span className='date'>Today at 6:00PM</span>
        </div>
        <div className='text'>Nice blog post!</div>
      </div>
    </div>
  );
};

// Export statement will make this file availabe to all other files inside of this project.
export default CommentDetail;
