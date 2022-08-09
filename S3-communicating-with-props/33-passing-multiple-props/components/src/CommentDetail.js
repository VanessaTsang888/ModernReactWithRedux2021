import React from 'react';

// The props object don't need to be inside of parenthesis since only one argument not multiple arguments.
/*
Now props will contain x2 key-value-pairs. The props.author and the timeAgo props with its values.
This will display different date/time in the UI.

New key-value-pair which is avatar -> in the index file. So reference that prop avatar and pass it to this
 src.
*/
const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        {/* Extract this image url. Customise an attribute on jsx element using a prop. Reference
          a JS variable within the src. We not hard coding the source.  */}
        <img alt='avatar' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          {/* Print out date/time inside of span tag. Use braces to reference a JS variable. */}
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.postComment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
