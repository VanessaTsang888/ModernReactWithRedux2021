/*


*/
import React from 'react';

function App() {
  return (
    // The wrapper value not need to be in braces but just as a string.
    <div className='wrapper'>
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: 'gray' }} // value need to be inside single quotes.
      />
    </div>
  );
}

export default App;
