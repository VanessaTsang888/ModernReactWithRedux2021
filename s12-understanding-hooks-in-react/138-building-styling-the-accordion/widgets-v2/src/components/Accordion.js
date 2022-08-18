/*******************************************************************************************************
Lecture 138 - Building and Styling the Accordion.
Using the map() function to loop over the items array and return some jsx and includes an icon and some
open source css for my Accordion App.

Every element inside of a list of jsx element needs a key property. We'll use the title of each item as our key as its unique
and consistant across renders.

Use React Fragment tag rather than div tag to avoid getting the extra boarder at the top of the App.
So we don't get the extra element but just jsx containing element that React understands that we have
2 div's inside of it.
*******************************************************************************************************/

import React from 'react';

const Accordion = ({ items }) => {
  // Use the map() method to loop through the items Array and for each item return some JSX code.
  // The className's come from the Semantic ui library so I don't need to write the css myself.
  const renderedItems = items.map((item) => {
    return (
      // key property of item as every element inside of a list of jsx elements need a key property.
      // We'll use the title of each item as our key as its unique and consistant across renders.
      // We have to return this at the bottom return statement.
      <React.Fragment key={item.title}>
        <div className='title active'>
          {/* HTML <i> tag is to display icon on the screen. */}
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  // The key property above, return from our component here in this return statement dynamically using a set of braces.
  // Display our list of rendared items which is a variable with the returned jsx stored inside it.
  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
