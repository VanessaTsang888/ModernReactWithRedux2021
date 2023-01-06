/******************************************************************** 
1. When setCount func gets called, this Component gets rerendered.
When this happens 3 different place that refers to count will get updated
as the count will get incremented.
********************************************************************/

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // When user does something, Update the piece of state. Causes React to rerender the component.
  };

  /*************************************************************************  
Whenever we call our setter func to updated our piece of state, we are going to pass in a new value. Then React will automatically rerendr our entire App component. Now our piece of state is equal to whatever we just passed into setCount func. So our App component gets executed many many times. Everytime user clicks btn, the App component runs again.
***************************************************************************/
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
