/******************************************************************************
Step 1:
Create Accordion component in this file as an arrow function.

Step 3: 
Receive the list of items from the App component and render out that
list of items on the screen.
*****************************************************************************/

import React from 'react';

/******************************************************************************
Write the Accordion component as an arrow function to return a h1.

To receive the list of items from the items array, we pass the
items object as an argument into this arrow function.

Render out that list of items on the screen - test.
*****************************************************************************/

const Accordion = ({ items }) => {
  return <h1>{items.length}</h1>; // 3
};

// Export this Accordion component for other files to use when needed.
export default Accordion;
