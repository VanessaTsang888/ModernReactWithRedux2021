# 21 Extracting Components

When the index.js file gets more complex/more code within the App function block we want to move some code into App.js file (for better organisation) which the job is to create the App func/Component.

## Code Files

These are the files and code we need to develop our Web App.
**_index.js_**

1. import React and ReactDOM
2. Import the App component.
3. Create a root.
4. Show the App component.

**_App.js_**
Code to create a Component.

## 5 Steps to Creating a Component

1. Create a new file.
   Naming convention - file name should start with cap letter (to make it clear that this file contains a Component) such as: App.js
2. Inside this new file, make our new component that has a func that returns JSX.

```JS
function App()
{ return <h1>Hello</h1>}
```

3. Export the component at the bottom of the file:

```js
export default App;
```

4. Import the component into another file (where we want to use our component).

```js
import App from "./App";
```

5. Use the component.

```js
<App />
```

Task Completed:
Created new component and written the function block of code. Created screenshots. Now my project is a little better organised in multiple files.
