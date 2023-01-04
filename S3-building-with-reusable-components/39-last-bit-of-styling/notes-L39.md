# 39 Last Bit of Styling

The heading at the top of the web app, we are now going to style that.

## Bulma

Bulma > Layout > Hero: big green banner with big bold text > write additional elements with className's.
https://bulma.io/documentation/layout/hero/

### App.js

Wrap the heading in some addition elements.

**_Show a description for each Card:_**
In the same file, pass down another prop > first add a new prop called 'description' in this file.
Then in ProfileCard.js file we receive this prop within our prop list within object of first argument.
Now make use of this 'description' inside of this component > make use of the className of media-content. After this closing div, add in another idv element with className of content, and display our 'description'
inside braces -> jsx syntax.

### Make Siri Card taller

To make the Siri Card same height as the other two cards use this code inside of ProfileCard component > first div element:

```js
style={{ minHeight: "100%" }}
```

**_Help:_**
I don't have enough space between each Card and don't know the best solution to fix this - inline styling somewhere?

#### Quick Win

To have some fun and test myself a little more, I've added my name and the current date within the heading by using Javascript expression directly inside of a set of braces and the JS Date func or Object inside that - see my screenshot for end result.
