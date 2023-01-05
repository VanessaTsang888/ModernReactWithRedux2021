/********************************************************************************
L44 - Variations on Event Handlers:
When this thing is clicked, do a console log > code all on one single line > 
clean, semantic code. Not defined ahead of time.

Delete the semi-colon, the first set of braces around the console log, we 
are still defining the func and not calling it right away. We are still 
defining the func and passing it down to the btn element. Everything still 
works. This is very common when we are trying to pass a event handler or 
callback func that is very small - little code inside of the console log 
> write the callback directly inline. This syntax is more cleaner and sematic.
*********************************************************************************/

function App() {
  //   const handleClick = () => {
  //     console.log("Button was clicked!");
  //   };
  return (
    <div>
      <button onClick={() => console.log("Button was clicked!")}>
        Add Animal
      </button>
    </div>
  );
}

export default App;
