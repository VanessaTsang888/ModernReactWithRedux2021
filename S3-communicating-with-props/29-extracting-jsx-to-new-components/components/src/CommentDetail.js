// import the react library.
import React from 'react';

// New function that's going to serve as this CommentDetail Component.
// Also use a set of parenthesis with return statement when we know we going to have
// big block of jsx.
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
