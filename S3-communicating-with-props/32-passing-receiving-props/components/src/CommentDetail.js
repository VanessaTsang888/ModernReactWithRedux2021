import React from 'react';
import faker from 'faker';

/***************************************************************************************
In index.js file we've provided the data within the child component using props.
Now we can comsume that data in the function below. We provide this function 
with one argument of: props which is an object that contains the data that we provided 
from the parent. Then we refer to that prop inside of our JSX -> {props.author}
******************************************************************************************/

/************************************************************************************** 
Removed the hard coded name of sam and used braces to get this data in dynamically using
 props -> {props.author}
*************************************************************************************/
const CommentDetail = (props) => {
  // Console.log to see the x3 objects in the UI -> inspect -> Console tab:
  // console.log(props);
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.image()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Today at 6:00PM</span>
        </div>
        <div className='text'>Nice blog post!</div>
      </div>
    </div>
  );
};

// So that other files in this project know that they can use this component.
export default CommentDetail;
