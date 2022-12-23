# Lecture 16 Typical Component Layouts

Printing out JS variables inside of JSX, continued.

1. Display/printout x2 JS variables inside a single element - h1.
2. Can also mix that up with plain text.

```js
function App() {
  const name = "Samantha";
  const age = 23;
  return (
    <h1>
      Lay ho, my name is {name} and my age is {age}
    </h1>
  );
}
```

I have run the app and found that the result is as expect. See my screen shot in the project folder.

component Layout: We will see this pattern or layout of code:

- Function declaration at the top.
- Code to calculate or generate the values that we need to show in our JSX.
- Use the variables within the return statement to display data - JSX syntax.

We will see pattern over and over again.

Top: computation and lookups.
Bottom: how to printout/display that data

```js
function App() {
    const message = 'Lay-ho';
    const sum = 1 + 1;
}

return (
    <div>The Message is: {message}</div>
    <div>The sum is: {sum}</div>
);
```

I have tested using below cmd and working in UI as expected.
