# 20 Exercise Solution

I have watched the video for this lecture and found out that my code is correct. Plus, I've added some extra code comments.

```js
import React from "react";

function App() {
  return (
    // Will printout a text field for user to enter some text and not restricted to number value.
    // The wrapper text not need to be in braces but just as a string.
    // The readOnly and the spellCheck Prop names has been shortened as they both use the Boolean of true. If we need the value to be false then we dont use the shorthand.
    // The outer set of braces is to say we are proving some JS. The inner set is to declare an Object.
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "gray" }} // Inline styles should be provided as Objects. values need to be inside single quotes.
      />
    </div>
  );
}

export default App;
```
