# Quiz 2: Showing Javascript Values in JSX

Q1:
What would the following component show on the screen?

```js
function App() {
  const favoriteColor = "Blue";

  return <div>{favoriteColor}</div>;
}
```

A1: A div with the text `Blue` inside of it.

Q2: Imagine you're working on the following component:

```js
function App() {
  const age = 23;

  return <h5></h5>;
}
```

You want to show the `age` variable inside of the `h5` element. How would you update the JSX to do so?
A2:

```js
return <h5>{age}</h5>;
```

Q3: What would the following component display on the screen?

```js
function App() {
  const person = { name: "Samantha" };

  return <div>{person}</div>;
}
```

A3: Nothing, React would throw an error as you are trying to show an object.
