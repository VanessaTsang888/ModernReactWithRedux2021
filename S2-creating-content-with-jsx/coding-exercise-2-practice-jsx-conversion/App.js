/*******************************************************************************
Converting HTML to JSX to develop a text field for users to enter some text.

*******************************************************************************/
import React from "react";

function App() {
  return (
    // Will printout a text field for user to enter some text and not restricted to number value.
    // The wrapper text not need to be in braces but just as a string.
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "gray" }} // value need to be inside single quotes.
      />
    </div>
  );
}

export default App;
