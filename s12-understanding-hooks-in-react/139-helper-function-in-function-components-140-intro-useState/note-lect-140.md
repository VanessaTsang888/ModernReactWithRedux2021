# Introducing useState

**_Make use of the hook system in React_**

Rather than collapsing and expanding each panel, we will keep track of what index the user has clicked on and then print out that index at the very bottom of the screen. Therefore, if user click on the first element or title, then 0 will print out at the bottom as array is zero based.

## Write out some code to use the hook system

Keep track on the currently selected index and then print it out at the bottom of the screen.

Inside of the Accordion.js file

- Import the useState function at the top of this file.
- At the of the Accordion component, initialise a new piece of state.

```js
const [activeIndex, setActiveIndex] = useState(null);
```

- Inside of the onTitleClick function, update the value of our piece of state anytime a user clicks on a title.

```js
setActiveIndex(index);
```

- Inside of the second return statement, write a h1 tag to print out the value of...

```js
<h1>{activeIndex}</h1>
```

### Test in the UI

The useState function or hook works as I have tested in UI by clicking on each title and the number appears at the bottom of screen as expected. My test has pasted. See my screen shot.
