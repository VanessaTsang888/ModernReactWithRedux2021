Section 7: Handling User Input with Forms and Events:

78. App Overview :
User events: user clicking on something, typing something or dragging something around on the screen. How to deal with user events.

Stuff to Still Figure Out:
How to deal with user events?

1. How do we get feedback from the user?

2. How do we fetch data from some outside API or server?

3. How do we show lists of records?

Topics:
User events, fetching data and showing lists

The App: Search Photos
V1 Implementation:
Show a text input at the top of screen for user to type-in some text and press Enter. That will do a search or a request to an outside API that is going to find images or basically just simple pics that match whatever term that user just entered and return that to the screen/UI. Not much styling just handling user input, showing list of data, handling searching for images.

V2 Implementation:
Phase 01: do same as V1 but how we show these images to the user rather than just list them?
Tile the images across the screen (columns & rows) as images can be of different sizes so we need to tile them to line them up nicely using CSS style - intergrate React with non React code.

Generate new app to house our code for this project:
    npm install -g create-react-app  
    create-react-app reactproject 
    or combine both together: npx create-react-app reactproject  

I used the command as per instructor but no luck. Researched in Google and found this:
    create-react-app reactproject  
    or use: npx
Resource: https://www.javatpoint.com/react-create-react-app

I had to use these commands:
    sudo -i
        npm install -g create-react-app
            create-react-app photos


79. Component Design;

Start up my photos app:

I followed the last lecture to create new React App and this lecture I tried to run it but no luck. The Solution:
From the QA within this course, I found a solution:

I had to uninstall the app then install again using:
Uninstll:
    $ npm uninstall -g create-react-app
Install:
    $ npx create-react-app pic
Then:
    $ cd pics
    $ npm start

Resource: 
https://create-react-app.dev/docs/getting-started/

STUFF TO STILL FIGURE OUT:
1. How to get feedback from user?
2. How to fetch data/records from some outside API or server?
3. How to show lists of records?

CHALLENGES:
Need to get a search term from user;
Need to use that search term to make a request to an outside API and fetch data;
Take the fetched images and show/render/display them oL80n the screen in a list.

V1 Implementation:
Break down into separate components (see lectures diagram):
1. The App Component is going to be in the root of my application. Will show an instance of the SearchBar and an instance of the ImageList components.
2. SearchBar: responsible for showing a text input at the top of the screen.
3. ImageList: will take a list of images and render them out as a list on the screen.

80. Adding Some Project Structure:

Project folder -> src -> delete all files.

Created the index.js file within src directory.
Create components directory inside src.
Created the App.js files inside of component directory.

81. Showing Froms to the User:

Create component called SearchBar. Export it. From App.js import SearchBar component.

In the SearchBar componet we need a text input.

82. Adding a Touch of Style:

For better looking image search on the UI:

https://cdnjs.com/libraries/semantic-ui

Do a search for semantic.min, copy the code. Open 'index.html', inside of the head, write a link tag, past inside it.

To make search feild less than full width:
        <div className="ui container">


Add a little margin at the top: define it inline:
            <div className="ui container" style={{ marginTop: '20px'}}>

83. Creating Event Handlers:

The user is making changes inside of our app.
We need to react to user's typing in to the search bar -> write a new method a the top of the class.
Pass a method 'onInputChange' to a prop called 'onChange', onInputChange is function but we don't put a set of parentheses at the end of it as it's a called back function. So we are passing a reference to this function, to the input element so that the input can call that function at some point in the future. 

Note: DO NOT put a set of parentheses whenever we pass a callback fn to an event handler, like 'onChange'.

84. Alternate Event Handler Syntax.
Using abbrivated syntax:
Refactor to show alternate way to write event handler. Then use it few times.
Rather than passing a reference to the onInputChange callback fn, replace it with Arrow Function. This is the samething just a abbreviated syntax where we don't need to define a separate method on the class.
We'll often use Arrow Function anytime we have a single line of code that we want to execute, anytime that some event occurs.

Before:
                    <input type="text" onChange={this.onInputChange} />


After:
                    <input type="text" onChange={ (event) => console.log(event.target.value) } />

 Then delete the onInputChange method at the top of the class component. Since we only need to console log out the prop that the user types into the search bar, we can use an Arrow Function.
We are using arrow fn to pass a callback to a event handler frequently, we'll see the event object abbrivated as just the letter 'e':
                        <input type="text" onChange={ (e) => console.log(e.target.value) } />

85. Uncontrolled vs Controlled Elements:

Continue with event handlers but more challenging subject around event handlers. 
Currently we have developed an 'Uncontrolled Form Element' but we would prefer to work with Controlled components.

We need to refactor our search barr from a Uncontrolled element to a Controlled element. The component is still the same as before.

Initailise a state object, with a single property called 'term' and set it to default to be an empty string.
Replace the 'onChange' prop with an arrow fn as her last lecture.
 Write new prop 'value' will be equal to this.state.term
Save the file.
Tested using my Developer Tools within Chrome and found the search bar still works as before which is what I expeected.

86. More About Controlled Elements:

The Flow:
User types inside the input;
Callback gets invoked;
We call setState with the new value;
Component rerenders;
Input is told what its value is (coming from state.)

WHAT IS THE DIFFERENCE BETWEEN THE TWO IS WHY WE PREFER CONTROLLED ELEMENTS.
The old way we had to reach out to the DOM to get the value:
    <input value="hi there" />

Developers don't like to store info inside of our HTML elements as its not best practice. In our Unconrolled element the input tag itsle was storing the value and we don't like to do that.
Instead we want to store all of my info inside of our React component as we want to make sure that the back side of our App is what is driving all of the data that is folowing through our App.
We not going to store data inside the DOM.

Diagram after Refactoring it to be Controlled:
We don't need to look at the DOM, somehow reference that input and pull the value out of it. We can look directly at our component, look at its state object - my component has a term of 'hi there'.
That means the value of my input must be 'high there'. If we go into the DOM - 'go into the state, I don't know what the value is?'. So we'll always make use of our React component.
The idea is that we are storing our info inside of our component on our state property as opposed to storing info inside the DOM.

We set the value on the input with essentially the value that is already in there. The input knows what user has typed but we are overriding that and putting a new value back in - the same value that.
was already in there. This is to make sure the React App is driving and storing all data and not the HTML side of things. We want to store info in components not DOM.

We use Controlled Elements as we need to make sure that it is React App driving and storing all of our data and NOT the HTML side of things. We want to store everything in componets rather than in the DOM.

If I want to render my search bar with some default value inside the input, I change the initialisation of the state term.

We can force user to always type-in uppercase letters by forcing the value within the 'onChange' prop to: .toUpperCase()
                        onChange={ e => this.setState({ term: e.target.value.toUpperCase() }) } />
Then the entire component will rerender and the input will rerender too and force in a capitalised version of the value to it. Therefore, certain opporations get really easy when I start using Controlled components.                     

Controlled components is not only for text inputs but for many other elements eg, select option or radio buttons or checkboxes.

87. Exercise Overview - Receiving Values:

This password component has a little validation in it.
User must enter a pw that is at least four characters in lengh.
The task is to rewrite the code so that once the user has typed at least 4 character the warning msg disappears.
There is 2 files: App.js and Validator.js












