/*
 Part 2 of lecture 37: I have wrapped the remaining x2 CommentDetail component tag
 with Approval Card component tag. Now the approval card has the comment detail showing inside it.

 I feel that CommentDetail is now the grand child, ApprovalCard is still the child of App in this index.js file.


 */

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      {/* Return a new card at the top. Inside ApprovalCard we don't have to pass in a React component. 
      We can put in plain text or standard jsx as well. This will work ONLY if we make sure we reference 
      { props.children } in the ApprovalCard component.
      */}
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          content='Vanessa, nice blog post!'
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00AM'
          content='Great subject on frontend development today.'
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 5:00PM'
          content='I love your style of writing Vanessa :-)'
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
