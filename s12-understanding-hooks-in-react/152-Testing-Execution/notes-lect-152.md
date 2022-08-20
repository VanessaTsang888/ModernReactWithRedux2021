# Testing Execution

write out some code arond our useEffect and understand when the code inside this function gets executed.

## useEffect second Argument

Scenario 01:
Run at initial render.

```js
useEffect(() => {
  console.log('I ONLY RUN ONCE');
}, []);
```

Scenario 02:
Without any Array at all. Run at initial render AND run after every rerender.
So after the initial render plus after every keypress.

```js
useEffect(() => {
  console.log('I ONLY RUN ONCE');
});
```

Scenario 03:
When we have an Array with an element inside of it, in our case its 'term'.
[data]
Run at initial render AND run after every rerender if data has changed since last render. Therefore, Run this function on Search component if term changes. Its all about the second argument.

```js
useEffect(() => {
  console.log('I ONLY RUN ONCE');
}, [term]);
```

It is not common to see no second argument not even an empty array.

The Array can have multiple element inside of it, e.g. if we have termTwo inside a second useState hook then useEffect is going to run if either of those elements change between renders - one one of them need to change for useEffect to execute the function.
