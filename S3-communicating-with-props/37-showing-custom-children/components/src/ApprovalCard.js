import React from 'react';

// Every function receives a first argument that we refer to as props which has
// the configs from the CommentDetail.
const ApprovalCard = (props) => {
  /* Check the props objects inside the props in the UI.
   Show the React compenent itself. Show in the body of our ApprovalCard.
  console.log(props.children); */
  return (
    <div className='ui card'>
      {/* Replace the text Are you sure with whatever data is in: props.children.
  Just reference it using a set of braces within the div tag for the className "content" */}
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
