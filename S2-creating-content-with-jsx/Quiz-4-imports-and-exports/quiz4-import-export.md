# Quiz 4: Import and Exports

Question 1:
Imagine you have two files in a single directory. One is called App.js, the other is called index.js.

Here's the contents of the App.js file:

```js
function App() {
  return <div>Clock Time</div>;
}
export default App;
```

If you wanted to import the App variable into the index.js file, what would you write?

Answer 1:

```js
import App from "./App";
```

Question 2:
Imagine you have two files in the same folder. They are named user.js and index.js

Here's the contents of the user.js file:

```js
const username = "sparkles04";
const email = "sparkles@gmail.com";
```

export { username, email };
How would you import both the variables `username` and `email` into the index.js file?

Answer 2:

```js
import { username, email } from "./user";
```

Passed as got both questions correct.
