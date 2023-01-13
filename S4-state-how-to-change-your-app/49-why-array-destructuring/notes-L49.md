# 49 Why Array Destructuring?

A Javascript feature. Fancy way to get access to the piece of state + setter.
The left hand side of the equals oporator is the Array Destructuring > inside and including the square brackets.
The piece of state is the first variable called: count. It starts as 0, changes over time.
The setter func is used to update our piece of state.

On the right of the equals oporator is the useState func with the initial default value for the piece of state.

```js
const [count, setCount] = useState(0);
```

This is the same as the Array Distructuring which is a lot more code.
Display the first and second elements on the screen.

```js
const myArray = makeArray();
const firstElement = myArray[0];
const secondElement = myArray[1];
console.log(firstElement, secondElement);
```

This is a shortcut, cleaner code which is best practice and we get back same results > Array Distructuring:

```js
const [firstElement, secondElement] = makeArray();
console.log(firstElement, secondElement);
```

so the square brackets say: whatever is on the right handside of equals oporator, assuming that is any Array, then take the first element out there and assign it to a brand new variable called: firstElement. Then take the second element out and assign it to the variable called secondElement. Therefore, we are simultaneously creating the Array, creating two new variables, and assigning some elements from the array into those variables.

Why is Array Distructuring used with useState?

When we call useState with initial default value of 50, we get back an Array with 2 elements inside of it: > inspect > Console tab > `(2) [50, f]` The first element is our default value of our piece of state, in our case its 50. The second value is our setter func -> the set count variable.

```js
console.log(useState(50));
```

Why useState return an Array?
It is common to declare multiple hooks inside of our App component . Each piece of state MUST have unique name.

Instead of returing an array of 2 elements inside of it, can return an Object. But trying to return an Object we have to write out more code due to access to properties. The best practice is the write array distructuring as its cleaner code and best practice.
