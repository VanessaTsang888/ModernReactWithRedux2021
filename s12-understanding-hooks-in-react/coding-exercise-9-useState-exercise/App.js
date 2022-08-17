import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
  // 1. Call our useState function at toop of our component.
  // 5. Now count will be equal to the new value that we just passed into setCount.

  const [count, setCount] = useState(0); // Initialise this function with number zero.
  const onButtonClick = () => {
    // 3. Call setCount to update my piece of state. Then provide a new value to it. The new value I want to update my state to is: count + 1
    // 4. Now our entire component will re-render.
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click Me!</button>
      {/* 2. Reference the count piece of state I've just create in step 1 - above. Now when user clicks the btn, the event handler onButtonClick will be invoked. */}
      <h1>{count}</h1>
    </div>
  );
}
