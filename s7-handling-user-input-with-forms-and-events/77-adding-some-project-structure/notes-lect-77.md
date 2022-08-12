# 77 Adding Some Project Structure

Now building the App.

Inside of src dir, create new dir called: components. Then we create our new component called App here.

Inside index.js file, we write an import statement to import than file. Its in the current directy hence the x1 period and x1 forward slash.

```
import App from './components/App';
```

Then we reference the App component with the id of root.

```
ReactDOM.render(<App />, document.querySelector('#root'));
```
