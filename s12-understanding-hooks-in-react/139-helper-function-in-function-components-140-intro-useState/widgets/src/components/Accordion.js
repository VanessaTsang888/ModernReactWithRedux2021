/*************************************************************************************
To dectect when user has clicked on a title, we need a Helper Function at
the top of the Accordion component. This Helper Function is called onTitleClick
and will be stored into this variable that we've defined with const. We consol.log
out to test in the UI.
*************************************************************************************/

// L140: 1. Get the useState function from the React library which gives us access to state inside of a functional component.
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  /************************************************************************************
  Helper Function with index to track which title user has clicked on.
  Once user has clicked on this function then the index gets passed through
  to the onClick Prop. 
**********************************************************************************/

  //  L140: 2. Initialise a new piece of state.
  const [activeIndex, setActiveIndex] = useState(null);

  // L140: 3. Update the value of our piece of state anytime a user clicks on a title.
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        {/* onClick Prop is a callback function that we want to run not when our App 
        is rendered but sometime in the future/whenever user clicks on the title - 
        the onTitleClick variable. When the onClick arrow function is executed, run this
        onTitleClick function. */}
        <div className='title active' onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  // L140: 4. Use h1 tag to print out the value of: activeIndex.
  return (
    <div className='ui styled accordion'>
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
