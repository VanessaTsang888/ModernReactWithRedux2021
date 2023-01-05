# 41 Initial App Setup

App walk through:

1. Will have x3 distinct files: index.js | App.js | AnimalShow.js
   -> index.js > to start up our app.
   -> App.js > inside will be our App Component to show the 'add animal btn at the very top' and it is going to show a number of child components.
   -> AnimalShow.js > a single child component to show a single animal + heart.

   2. We need to show a different animal each time so we need to pass down a Prop sometime.

App.js > 2 animals shown

```js
{
  type: "cow";
}

{
  type: "bird";
}
```

App.js will tell each child component which animal (the object) to show. Example, I have a Sting of cow, I need to show an image of a cow.

## Code Files

I have created x3 files and written a little code in each of them.
