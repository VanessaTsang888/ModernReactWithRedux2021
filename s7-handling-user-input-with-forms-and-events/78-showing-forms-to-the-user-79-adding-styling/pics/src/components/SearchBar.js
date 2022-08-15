/***********************************************************************************
Lecture 78:
1. This SearchBar component is to show the text input at the top of the web page.
I have to write a class based component to use state without using the 
React Hooks System (will use hooks once I've completed the Hooks section of 
this course).

Multi line return statement MUST be have a set of parentheses to house the jsx.
Within the jsx, I've replaced the Search bar text with a set of <form> tag to 
develop the text input. 

2. Once written this component, then I need to show this inside of the App component
which is inside of the App.js file.

Lecture 79:
Write attribute inside of the html tags within the jsx. They are coming from the
Semantic UI library so I don't need to write the css myself but to focus on 
learning React.

**********************************************************************************/

//  Import the react library.
import React from 'react';

/****************************************************************************
Class based component as need to handle user input. Will need to make use of
 component level state.
 For the text input, write jsx inside of the multi-line return statement.
***************************************************************************/

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input type='text' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
