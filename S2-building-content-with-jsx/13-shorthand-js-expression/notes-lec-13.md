# Lecture 13 - Shorthand JS Expressions

We can use the braces to write out an expression directly inside of our JSX. This is without declaring a variable ahead of time and reference it inside of the JSX.

1. we use the date Object to printout the current time on the screen.

```
function App() {
    return <h1>{new Date().toLocaleDateString()}</h1>;
}

root.render(<App />);

```

I have printout the current time on the screen without declearing a variable ahead of time, then reference it inside of my JSX. We do this often to keep our components clean.
See my screen shot. See my index.js file is in: lecture 10\the-server-project-jsx

