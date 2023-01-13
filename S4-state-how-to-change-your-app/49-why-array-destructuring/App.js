/******************************************************************** 
49 Why Array Destructuring?
Array Distructuring is a shorter way and cleaner way to write some other code.

Why is Array Distructuring used with useState? When we call useState with 
initial default value of 50, we get back an Array with 2 elements inside 
of it: > inspect > Console tab > `(2) [50, f]` The first element is our 
default value of our piece of state, in our case its 50. The second 
value is our setter func -> the set count variable.

Why useState return an Array?
As its cleaner code than returning an object with properties.
********************************************************************/

import { useState } from "react";

function App() {
  // Shorthand to declare Array, store in variable. Assign element to a variable.
  const [count, setCount] = useState(0);

  console.log(useState(50));

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
