/******************************************************************** 
52 List Building in React.

Show a lists of different elements to user.
********************************************************************/

import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]); // Update a piece of state that is a variable.
  };
  /* 
  Map over an array of elements, and pass-in two elements.
  Transform a String into an instance of type="dog".
 Use JS func `map()` that allows us to apply this magic tranformation step to every element inside of any array.
New func called: renderedAnimals. An array of components stored in renderedAnimals variable to show to user.
The key of index is record keeping with React.
*/

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  // Display our list of components which is renderedAnimals
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
