# 149 Text Input with Hooks

Impliment the text input that the user will type their search term into.

No submit button next to the search input. On every keypress we going to do a search of the API. Later will write code to restrict the number of searches that we make.

1. Write a little jsx block inside of the Search component. Delete the h1, write in a set of parenthises, and return a big jsx block:

- div -> div with className of ui form and a div with className of field. These are for the styling.

- lable tag with text.
- input tag with className of input so user can click inside of the search input.
- Now a text search input will be displayed on screen.

## Use useState hook

Assign a value prop and an onChange event handler. Anytime the value inside that input is changed, we going to update our piece of state that is going to keep track of the value of that input. To do this we make use of the useState hook.

- import useState hook at top of Search.js file.
- At top of Search component create a new piece of state. Name this piece of state: term. Provide a default value of empty string.

```js
const [term, setTerm] = useState('');
```

- Wire-up term and setTerm to the value prop and the onChange prop of the input element/tag.

## Next Up

Do a search of API with every request that is issued. When we will issue that request? 2 options.
