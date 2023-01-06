# 48 Understanding the Re-Rendering Process

What happens when setCount func gets called?
We use the State System when we want to update content on the screen such as user clicks on a btn to add an Animal.

```js
setCount(count + 1);
```

1. setCount() -> use to update our piece of state.
2. Whenever we call this func, our component will automatically be rerendered. What do this mean?

## Component rerender

1. The first time our App gets called:

- React will take the initial default value inside of the parenthises and assign it to the 'count' variable on the left. This only occurs the first time our component get displayed on screen. Now the default value is deleted and never used again. Now count is equal to the number 0. Now this will be in 3 different places. The Array destructuring, the setCount() func, the JSX within the return statement. This is why we see zero on the screen

When setCount() gets called/updated, our component will rerender -> our app get run the second time.

2. The second time our App gets called:
   We don't make use of the default value we passed into the useState func. Now count is be equal to 1 due to the rerender of component. This new number will flow through our component again in the same 3 different places. React is going to call this entire App() func again so we end up returing some jsx that will now say xxx 1. This is what we see on the screen.
   Now the entire process will happen again and React will notice we are trying to update a piece of state and will rerender a third time.

3. The third time our App gets called:
   The above process will run again but count is going to be equal to 2. So our entire func will run for the third time and everywhere inside of this App func that we refer to the number or as we refer to the variable count will get replaced with 2. So will display number 2 on screen.

**_Summary_**
Whenever we call our setter func to updated our piece of state, we are going to pass in a new value. Then React will automatically rerendr our entire App component. Now our piece of state is equal to whatever we just passed into setCount func. So our App component gets executed many many times. Everytime user clicks btn, the App component runs again.

How we want to adjust or piece of state each time to make this change we update our setCount call - the code inside the parenthises.

### Only Things to Understand Right Now

1. Use the state system when you want to update content on the screen.
2. Calling 'useState' defines a new piece of state.
3. The first argument to 'useState' is used as the initial value.
4. Updating state is done only using the setter function.
5. Calling the setter func causes React to rerender the component.
