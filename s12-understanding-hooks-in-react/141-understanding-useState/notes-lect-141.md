# 141 Understand useState

**_What_**
useState() is one of the React's primative hooks.

**_Why_**
The goal of this hook is to give us access to the state system iniside of a functional componenet.

**_How_**

When we call the useState() function we are making use of the Array Destructuring syntax on the left. We are NOT creating an Array.

Array Destructuring is a shortcut to get access to some elements inside of an Array.

```js
const [activeIndex, setActiveIndex] = useState(null);
```

1. When this hook gets called, we define and initialse the activeIndex piece of state using default value inside of the parenthises.

```js
useState(null);
```

2. First element - piece of state we are trying to keep track of and a value that is going to change overtime.

```js
activeIndex;
```

3. Setter function to change this piece of state. When we call this to update our piece of state, the whole componenet will auto re-render.

## Other Examples

To impliment a color picker for when user can pick a color.

```js
const [color, setColor] = useState('green');
```

Now, anytime we want to update the selected color, we would call setColor with the new color.

```js
setColor('red');
```

If we want to have multiple pieces of states, we can call state multiple times.

```js
const [activeIndex, setActiveIndex] = useState(0);
const [ter, setTerm] = useState('');
```

If we want to update those state values, we would first call one setter with:

```js
setActiveIndex(10);
```

Then the other setter with:

```js
setTerm('search');
```
