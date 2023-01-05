# Variations on Event Handlers

We don't want to call the callback func of handleClick() when our App is first rendered or when user lunches our web app as we just need to make a reference to this callback func since we just need to envoke it sometime in the future when user clicks the btn. This is why within the prop of 'onClick' we don't write the parenthises!

App.js > the return func or method:

```js
return (
  <div>
    <button onClick={handleClick}>Add Animal</button>
  </div>
);
```

## Examples of variations

3:06
Other ways to pass in a reference into the onClick prop.

Our Arrow func is equivillent to this `const handleClick = function() {...}`

1. We could define our func within the btn element rather than above the return() which is not ideal as harder to read, but valid syntax. We are still passing in a reference to a func into the onClick prop. Testing - Everything still works as expected.

```js
function App() {
  //   const handleClick = () => {
  //     console.log("Button was clicked!");
  //   };
  return (
    <div>
      <button
        onClick={function () {
          console.log("Button was clicked!");
        }}
      >
        Add Animal
      </button>
    </div>
  );
}
```

2. Another way to write this: convert the keyword 'function' into an arrow func. Everything still works.

```js
function App() {
  //   const handleClick = () => {
  //     console.log("Button was clicked!");
  //   };
  return (
    <div>
      <button
        onClick={() => {
          console.log("Button was clicked!");
        }}
      >
        Add Animal
      </button>
    </div>
  );
}
```

**_Refactoring_**
When this thing is clicked, do a console log > code all on one single line > clean, semantic code. Not defined ahead of time.

Delete the semi-colon, the first set of braces around the console log, we are still defining the func and not calling it right away. We are still defining the func and passing it down to the btn element. Everything still works. This is very common when we are trying to pass a event handler or callback func that is very small - little code inside of the console log > write the callback directly inline. This syntax is more cleaner and sematic.

```js
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
```
