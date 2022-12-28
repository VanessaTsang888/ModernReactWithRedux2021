# Quiz 3 - More on JSX:

Q) What would the following component show on the screen?

```js
function App() {
  const location = "New York";
  const weather = "cloudy";

  return (
    <div>
      <h3>
        The weather in {location} is {weather}
      </h3>
    </div>
  );
}
```

A) The weather in New York is cloudy.

---

Q) What does the warning probably say?

```js
function App() {
  return (
    <div>
      <input readonly />
    </div>
  );
}
```

A) Invalid DOM property 'readonly'. Did you mean 'readOnly'?

---

Q) Would the following component cause a warning at the console?
This is a tricky question - try showing this component yourself and checking your browser console!

```js
function App() {
  return <input placeholder="hi there" />;
}
```

A) No warnng would display.
