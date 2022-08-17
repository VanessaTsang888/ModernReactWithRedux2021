/*************************************************************************************
142 Setter Functions
Call the second element inside of a function:

When we call the useState() function or hook we receive an Array. The second element 
inside of it will always be our setter. To call it inside of our onTitleClick function, 
we simply call setActiveIndex and provide a new value as an argument.
*************************************************************************************/

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  /************************************************************************************
  1. When user clicks the second title of the Accordion which will call the second 
  index that is the argument of the onTitleClick, the setActiveIndex() function that
  is inside will get called and we provide a value of 2. This will cause our component
  to re-render. Then the default value of null will disapear - not used anymore as that
  was just an initialisation value.

  2. Now, the activeIndex will be equal to whatever we provided to our setter functin,
  on our case is 2.
  **********************************************************************************/

  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    // When user has clicked on title (item), update this second element or variable
    // with new value of index as the argument.
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
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

  return (
    <div className='ui styled accordion'>
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
