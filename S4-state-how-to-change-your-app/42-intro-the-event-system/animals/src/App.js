/************************************************************************
Wire up an event handler. When user clicks btn, the App func gets called 
due to the onClick Prop within the btn element.
The handleClick is a func but we dont need the parenthesis at the end.
*************************************************************************/

function App() {
  // This func is displayed by the onClick prop within the btn element.
  const handleClick = () => {
    console.log("Button was clicked!");
  };
  // When user clicks this btn the above func of handleClick with the plain
  // text String will get displayed on screen.
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
