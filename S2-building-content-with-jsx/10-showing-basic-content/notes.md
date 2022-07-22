# Section 2 - Building Content with JSX

## Lecure 10 - Showing Basic Content.
I have downloaded the starter files, deleted some files and added a new file as per the instructors instructions.

### The Server project:

- Modified files inside of the project folder I've downloaded.
- Start up an React app with as little code as possible.
- Created a new file: src\index.html

This file is the first to get executed when we run our React App.
This is where we write some code to create a component and show content on the screen or UI which is a 5 step process:
1. Import the React and ReactDOM libraries.
    - The x2 imports will show our component on the screen.
    - React import -> Library that defines what a component is and how multiple components work together. Basic library - can be shown on mobile device.
    - ReactDOM import -> Library that knows how to get a component (turns into HTML) to show up in the browser. Can be shown inside of browser.
2. Get a reference to the div with ID root.
    - get a div inside of our html doc which is: public\index.html -> Line 31:   <div id="root"></div>
    - This is the first file that get loaded up in the browser. Then is will cause our other js files to load up aswell.
    - So we get a ref to this div so we can eventualy tell React that we want our app to show up inside of this element.

3. Tell React to take control of that element.
    - Tell React we want to show our app inside of this element (el).
    - Do this by using the ReactDOM library.
4. Create a component.
    -  A component is a function that returns some JSX.
    - Define a simple function and return a simple h1 element that says: Hi there!
5. Show the component on the screen/UI.
    - To show that component on the screem we'll call root.render. Then pass in App as JSX element. 



