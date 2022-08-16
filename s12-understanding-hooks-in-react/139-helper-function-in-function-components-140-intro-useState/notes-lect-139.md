# 139 Helper Functions in Function Components

**_The Task_**

How to detect when user clicks on one on the titles?

In the Accordion.js file, at the top of the Accordion component, write an Helper Function and store this in the variable: onTitleClick. This should take an argument of index since we need to track which title of the items array user has clicked on.

```js
const onTitleClick = (index) => {
```

So we want to call this Helper Function each time user clicks on the div with className of title active, we pass through the index that is inside of the onClick={()} Prop.

Callback function

```js
onClick={() => onTitleClick(index)}
```

renderedItems function -> return statement -> div -> callback function:

We don't want to run the callback function the instant our component is rendered. Instead we want to call it sometime in the future. To do this we wrap it with an arrow function. When the onClick arrow function is executed, run this onTitleClick function.

I have tested in the UI using the Chrome Inspect tool and found the Helper Function works as expected. I've clicked on each title and in the Console tab I can see the console.log has printed out the Title clicked text along with the index of the title.

```js
console.log('Title clicked', index);
```

## Make use of Hooks

In the next lecture, use of hooks state system to keep track of which of the elements should be expanded and collapsed.
