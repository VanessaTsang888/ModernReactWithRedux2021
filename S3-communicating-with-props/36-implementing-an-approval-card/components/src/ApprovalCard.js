// 1. Boiler plate code.
import React from 'react';

// 2. Aproval card component - use const to desclare an arrow function called ApprovalCard.
const ApprovalCard = () => {
  // 4. JSX code. Notice its className rather than class. x2 btn.
  return (
    <div className='ui card'>
      <div className='content'>Are you sure?</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};
// S3. tatement so we can make use of this component in other files inside of our project.
export default ApprovalCard;
