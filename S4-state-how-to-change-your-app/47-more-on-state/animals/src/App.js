/******************************************************************** 
1. Define a piece of state with the useState func.
2. Give a value to the useState func. This is the default, starting value 
for our piece of state.
********************************************************************/

/******************************************************************** 
Import useState from React library anytime we want to use it inside 
of a component. Make use of state when we want to define a new single 
piece of state that will change over time.
We write a state call when we need a new piece of data that will change 
over time.
********************************************************************/

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // A useState call. Make use of this useState func.

  const handleClick = () => {
    setCount(count + 1); // 4. When user does something, Update the piece of state. Causes React to rerender the component.
  };

  /*************************************************************************  
3. Use the state in some way in our component - often in the returned JSX.
By clicking the btn will update the content as the counter gets incremented 
up by one from each click of the btn.
***************************************************************************/
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
