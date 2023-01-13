/******************************************************************** 
51 Picking a Random Element
Inspect the browser to see the random animal.
When user click on the btn, we going to get random animal and add to our
piece of state. Our animal state is going to be an array of Strings.


********************************************************************/

import { useState } from "react";
// Func that will create a random animal that is a value of a String.
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}
/* Testing: display a random animal on screen.
 console.log(getRandomAnimal()); */

function App() {
  // Declare Animal staten with default starting value of empty array.
  const [animals, setAnimals] = useState([]);
  // Every time user click the btn, will run this func, and add-in a random animal in our animals array > up-date our piece of state.
  const handleClick = () => {
    //  Create a new Array, take all the existing elements out of our array of animals and put into the New array, at the end put in a random one aswell.
    setAnimals([...animals, getRandomAnimal()]); // Update a piece of state that is a variable.
  };
  // Print out animals array inside of JSX. Printout whatever animals is.
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
