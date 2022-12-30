# Quiz 5 - Communicating With Props

Question 1:
What is the primary goal of the props system in React?

Answer 1:
To communicate data from a parent component to a child component.

Question 2:
You can often get a good idea of how a child component works by reading the list of props that it receives.

Here's an example child component:

```js
function NumberDisplay({ value }) {
  return <div>Your number is {value}</div>;
}
```

If you wanted to use `NumberDisplay` in your App component, which would you probably write?

Answer 2:

```js
function App() {
  return <NumberDisplay number="5" />;
}
```

I got both questions correct and now able to move to the next lecture.
