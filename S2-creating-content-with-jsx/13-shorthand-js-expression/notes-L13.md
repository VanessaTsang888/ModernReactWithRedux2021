# Lecture 13 - Shorthand JS Expressions

We can use the braces to write out an expression directly inside of our JSX. This is without declaring a variable ahead of time and reference it inside of the JSX.

1. we use the date Object to printout the current time on the screen.

```js
function App() {
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}

root.render(<App />);
```

2. I have printout the current time on the screen without having to declearing a variable ahead of time, then reference it inside of my JSX (func). We do this often to keep our components clean.
