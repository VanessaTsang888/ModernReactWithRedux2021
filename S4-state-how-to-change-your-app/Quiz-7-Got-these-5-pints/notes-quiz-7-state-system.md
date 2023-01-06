# Quiz 7 Got These 5 Points

Question 1:
You are building a new component and you realize that when a user types into some input you want to change the content visible on the screen.

To change the content on the screen, which system in React should you probably use?

A01:
The state system.

Question 2:
The first argument to the useState function is an initial, or default value, for our piece of state.

If we wanted our count piece of state to have an initial starting value of 10 instead of 0, how would we change our component?

A02:

```js
const [count, setCount] = useState(10);
```

Question 3:
The line `const [count, setCount] = useState(0);` declares a new piece of state, giving us back two variables.

`count` is the piece of state
`setCount` is a function we use to update the piece of state

If we wanted to update count to be 30, what code would we probably write?

A03:

```js
setCount(30);
```

Question 4:
What happens when we call setCount(count + 1) in the event handler?

A04:

React will immediately rerender the component. When the App component is ran a second time, the `count` variable will have an updated value equal to whatever we just passed into `setCount`.

I have all 4 question correct first time - see attached screenshot.
