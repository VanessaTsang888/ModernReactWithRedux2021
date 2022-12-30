# Coding Exercise 3: Practive with Props

Practice with Props:
You're working on a project that contains two components: App and BrightText

The App component shows three copies of BrightText

The `BrightText` component expects to receive a prop called color, but right now the App isn't providing that prop to the three `BrightText` it shows

Goal: Add in a color prop to each of the three BrightText elements in the App component.

The first color should be "red"

The second color should be "green"

The third color should be "blue"

The `BrightText` component is already complete - you don't need to make any changes to it.

App.js

```js
import React from "react";
import BrightText from "./BrightText";

function App(props) {
  return (
    <div>
      <BrightText color="red" />
      <BrightText color="green" />
      <BrightText color="blue" />
    </div>
  );
}

export default App;
```

I've checked my code and I've passed. See screenshot.
