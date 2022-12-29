# 22 Module Systems Overview

Optional video on Module Systems - import/export statements.
index.js | App.js

1. If we try to Console logout the App component without anything elese we will get an error.
2. We treat these separate files as separate, isolated context so the don't share any variables by default. If we want to share variables we use the import export system which is also referred to as a module system - this is how we share variables between different files.
3. These import and export statements are how we share variables between different files.
4. They get confusing as they are lots of tiny rules around them.

## Export Statements

The export statement is how we make a varible available to other files.

```js
export default App;
```

**_Default Exports_**
There are two kinds of export default statements: default and named.
One file can only have a single default export
We can write it at the bottom or at the top where we write it all on one line. Either is fine but for this course we going to use it at bottom - the first method.

Second way:

```js
export default function App() {
  return <h1>Hello</h1>;
}
```

Inside of our index.js we may have another variable with same name of App. Therefore within the import statment we can rename the App variable to something like MyApp. So rename the thing that we are importing we don't colide these two variable names.

**_Named Exports_**
Another way we can export variables from a file.

1. Use when exporting multiple variables from a file.
2. Can have as many named exports as we want.

```js
function App() {
  return <h1>Bye there! 再見</h1>;
}

const message = "hi";
export { message };
```

There is another way to write that and that is on one single line so we don't need to include braces.

App.js

```js
function App() {
  return <h1>Bye there! 再見</h1>;
}

export const message = "hi";
```

To import a Named Export, we use braces:
index.js

```js
import App, { message } from "./App";
```

Named Exports cannot be renamed -> if so will get error.

### The path at end of import statement

```js
// Path to file
import App from "./App";
```

This is saying we are importing a file that we created.

No './' or '../' means we are importing a package. This will cause my project -> node_modules directory -> look for a folder of whatever we are importing.

```js
// Import external library
import React from "react";
// Import external library
import ReactDOM from "ReactDOM/client";
```

This is a relative path (in same folder) from the file that we are in to the file that we are trying to import.

```js
// In the same directory find a file called App
import App from "./App";
// Up one directory
import App from "../index";
```

More complex path:

src > components > common: Button.js
pages > profile: ProfileShow.js

```js
import ProfileShow from "../../components/common/Button";
```
