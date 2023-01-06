# 47 More on State

What is State?

1. Data that changes as the user interacts with our App.

2. When this data changes, React will update the content on the screen automatically.

3. This is the one-and-only way we can change what content React shows.
   Even other libs that appear to update content use the state system behind the scenes.

## The code

App.js

1. Define a piece of state with the useState func.
2. Give a value to the useState func. This is the default, starting value for our piece of state.

```js
useState(0);
```

3. Use the state in some way in our component - often in the returned JSX.

```js
<div>Number of animals to show: {count}</div>
```

4. When user does something, Update the piece of state. Causes React to rerender the component.

```js
setCount(count + 1);
```

Usually we have up to 4 useState calls. If we need more then we should devide up our App more.

1. Array destructuring (on the left of equal oporator). Fancy way to get access to the piece of state + setter.
2. count -> The piece of state. Starts as 0, changes over time.
3. setCount -> Setter func. Used to update our piece of state.
4. ('0') -> Initial default value for this piece of state.
   When data changes our App will rerender.
   When we call useState we will get back an Array with two elements inside.
   Our initail value could be another value such as a String.

```js
const [count, setCount] = useState(0);
```

By clicking the btn will update the content as the counter gets incremented up by one from each click of the btn.
