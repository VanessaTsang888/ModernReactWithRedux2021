/******************************************************************************
Step 2:
To show the Accordion component we...
Import the Accordion component. Return the Accordion component using a div.
Create the array of 'items' and pass it down into the Accordion component 
as 'Props'.
*****************************************************************************/

import React from 'react';
import Accordion from './components/Accordion';

// Creating an items array of x3 Objects and communicate them down into our Accordion component.

const items = [
  {
    title: 'What is React.js?',
    content: 'React is a frontend Javascript library',
  },
  {
    title: 'Why use React?',
    content: 'React is the most popular JS library',
  },
  {
    title: 'How do we use React?',
    content: 'You use React by creating components',
  },
];

/***********************************************************************************************************
Passing the items array into the Accordion component so that in the Accordion.js -> Accordion component
we can receive it. The Prop name is 'items' and the object inside of a set of braces is 'items'.
I had to refactor this code due to a Warning I received in the Terminal when I print out the items array. 
**************************************************************************************************************/
const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
