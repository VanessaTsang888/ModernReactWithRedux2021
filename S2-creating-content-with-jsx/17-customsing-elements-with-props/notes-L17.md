# Customising Elements with props:

Proprs is abbreviated for properties and they are used to customise an element, similar to html attributes.

There are only slight differences between JSX props and html attributes.

## The input tag in React:

We want to make clear to users that this is an input designed to accept numbers.

Search for: [mdn number input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)

This is plain html for input that is ment to accept numbers:

```js
  <input type="number">
```

So we take this and write out something equivalent with React. To do this we use the props system. Props are similar to html attributes as per the above web page.

Tell an input its supose to receive an number. The type indicates some property we want to customise and the number String is a value for that property. We can provide multiple props per element. We are providing type, min and max. We can cap the user input to enter a range by using the min and/or max props.

In the browser, we get the arrows we can click on, they are provided by the browser (the browser behavior) NOT React.

```js
function App() {
  return <input type="number" min={5} max={10} />;
}
```

## Using variables in our props:

We can put in a variable in our prop or we can say:

Props can refer to a variable using the same curly braces syntax.

So we can define a variable (a container with value inside) ahead of time then use it within our props later within the return statement. We can do this for any kind of JS value such as a String, a number, arrays and Objects.

```js
function App() {
  const inputType = "number";
  const minValue = 5;

  return (<input
    type={inputType}
    min={minValue} />;
  );
}
```

All JS values provide into props. Writing out the values directly inside of the element itself.

```js
function App() {
  return (<input
    type="number" // A String must be inside of double quotes
    min={5} // A Number must be inside of a pair of braces.
    max={10} // As above
    list={[1,2,3]} // Arrays - wrap with curly braces.
    style={{ color: 'red' }} // Objects - as above.
    alt={message} />; // Variables - as above.
  );
}
```

### We can't display/printout objects on screen:

We can't provide object to an element with the intent of showing the object on the screen. So trying to display an object doesn't work. An Object can't go in between our JSX tags. We are allowed to provide an object as a prop. We are providing a prop called: abc and giving it an object that is configuration value.

```js
function App() {
  const config = { color" 'red' }
  return (
    <div>
      <h1>{config}</h1> // jsx - Can't provide object to an element.

      <input abc={config} /> // Provid object as an prop.

    </div>
  );
}
```
