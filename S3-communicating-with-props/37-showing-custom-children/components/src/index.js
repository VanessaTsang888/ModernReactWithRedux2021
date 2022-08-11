// Part 2 of lecture 37: I have wrapped the remaining x2 CommentDetail component tag
// with Approval Card component tag. Now the approval card has the comment detail showing inside it.
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className='ui container comments'>
      {/* Tell approval card to show comment detail. I think the CommentDetail is now the grandchild 
      as the ApprovalCard has become the child and the App in this index.js is still the parent. */}
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          content='Nice blog post'
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00AM'
          content='I like the subject'
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 5:00PM'
          content='I like the writing'
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
