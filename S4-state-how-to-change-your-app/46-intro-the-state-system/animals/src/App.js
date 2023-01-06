/******************************************************************** 
useState Hook is a func. 
The count varible has data stored inside of it.
********************************************************************/
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  /* 
User click btn to display an Animal on screen - the counter will increment up 
by 1 on each click.
*/
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
