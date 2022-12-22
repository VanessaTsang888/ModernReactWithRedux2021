# Lecture 11 - What is JSX?

Its what we write inside of a component to tell react what we want to show on the screen.

Will be passed through Babel which will get translated into JS ES6 as JSX is not valid JS so the browser can't use it.

This is what we write:

```html
<h1>Hi there!</h1>
```

Babel will translate that JSX into vanilla JS so this is what runsin the browser:

```js
React.createElement("h1", null, "Hi there!");
```

This object is what is returned from calling 'createElement':

```js
{
    $$typeof: Symbol(react.element),
    key: null,
    props: { children: 'Hi there!'},
    ref: null
    type: 'hi'
}
```

babeljs.io/repl
-> a tool to show you what your JSX is truned into.
-> If we write the equivalent calls inside of our component its difficult to understand that will display on the screen. This is why we write JSX - make our lives as developers easier.

```html
<h1>Hi there!</h1>
```

Just writing a JSX element dont get anything to show up auto in the browser.
This creates an instruction for React, telling it to make an element.
We have to return it from a component for React to use it.

Create a component.

```js
function App() {
  return <h1>Hi there!</h1>;
}
```

Then show the component on the screen by calling root.render and pass in App component.

```js
root.render(<App />);
```
