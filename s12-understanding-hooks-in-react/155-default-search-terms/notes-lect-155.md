# Default Search Terms

Add in a new piece of state to our App -> Search.js -> Search component -> straight after the first piece of state:

The results state will be an Array of objects so when our app first render our component on the screen we use a default value of an empty Array to say that we don't have any search value right now.

```js
const [results, setResults] = useState('[]');
```

Inside of the search function we going to take the data out of the response we receive.
Then after the Request, use data to update our results piece of state and provide data. This will cause our component to auto rerender so we can then access the results array down inside of our jsx block and render out our list.

```js
setResults(data);
```

## Next Up

Map over that results array and build out our actual list of elements to display inside the jsx block - inside of the second return statement.
