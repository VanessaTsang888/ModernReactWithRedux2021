/*************************************************************************************
Understand useState

The goal of this hook is to give us access to the state system iniside of a functional componenet.

When we call the useState() function we are making use of the Array Destructuring syntax on the left. We are NOT creating an Array.
Array Destructuring is a shortcut to get access to some elements inside of an Array.
*************************************************************************************/

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  /************************************************************************************
  1. When useState gets called, we define and initialse the activeIndex piece of state 
  using default value (the argument) that is inside of the parenthises. This first element
  that we are trying to keep track of is a value that is going to change overtime.

  2. The setter function will change this piece of state when user change something on the
  screen. When we call this to update our piece of state, the whole component will auto
  re-render.
  **********************************************************************************/

  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    // When user has clicked on title (item), update this second element or variable
    // with new value of index as the argument
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
