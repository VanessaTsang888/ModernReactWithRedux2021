# Quiz 6: Events

Q1:
You have an App component like the following:

```js
function App() {
  const onButtonClick = () => console.log("hi");

  return (
    <div>
      <button>Click Me!</button>
    </div>
  );
}
```

What would you write to make sure the function `onButtonClick` is called whenever the user clicks on the `button` element?

A1: the first option.

```js
function App() {
  const onButtonClick = () => console.log("Hi");

  return (
    <div>
      <button onClick={onButtonClick}>Click Me Now! Lol..</button>
    </div>
  );
}
```

Q2:
You have an App component like the following:

```js
function App() {
  const onSpanMouseMove = () => {
    console.log("Mouse was moved!!!");
  };

  return (
    <div>
      <span>Move Mouse Over Me!</span>
    </div>
  );
}
```

You want `onSpanMouseMove` to be called whenever the use moves their mouse on the `span` element. How would you update your code?

A2:

```js
function App() {
  const onSpanMouseMove = () => console.log("Mouse was moved!!");

  return (
    <div>
      <span onMouseMove={onSpanMouseMove}>Move Mouse Over me please!!!</span>
    </div>
  );
}
```

I got both questions correct first time which is a pass - see attached screen shot.
