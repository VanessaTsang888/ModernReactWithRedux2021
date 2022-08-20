# Quiz 4: When Does It Run?

Question 1:
Take a look at the following code. After running it, how many console logs would you expect to see, and when would you see them?

```js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  useEffect(() => {
    console.log('TEST!');
  }, []);

  return <div>This is a test component</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

Answer:

I would see one log statement of 'TEST!'. This would show up right after the component is rendered.

Question 2:
Take a look at the following code. Imagine that it is executed, then a user clicked on the button element three times. How many log statements would you expect to see printed?

```js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('TEST!');
  }, []);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

A: I would see one console logs of 'TEST!'

Question 3:
Take a look at the following code snippet. It is identical to the last question, except now useEffect has an array with a single argument inside of it.

How many time would you expect to see the log statement after a user clicks on the button three times?

```js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('TEST!');
  }, [count]);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

A: The useEffect function will be called once when the component is first rendered, then one time for ever rerender.
I would expect to see four log statements.

## Results

I have answered all questions and passed the Quiz. See my screen shot.
