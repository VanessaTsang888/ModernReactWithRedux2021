# Quick Practic with JSX

The App component below needs work.  It should show your name. Let's fix it up!

Add your name to the empty string on line #4

Print the name variable in the h1 element.

App.js

```
import React from 'react';

function App() {
  const name = 'Vanessa';

  return (
    <div>
      My name is:
      <h1>{name}</h1>
    </div>
  );
}

export default App;

```