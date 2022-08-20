import React from 'react';
import Accordion from './components/Accordion';
// Import the Search component to display a search input for user to type in their search term.
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const App = () => {
  return (
    <div>
      {/* I've deleted the Accordion component and replaced with this Search component. */}
      <Search />
    </div>
  );
};
export default App;
