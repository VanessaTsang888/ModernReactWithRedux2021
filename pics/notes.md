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

Receiving Values From Controlled Elements:
You can validate inpiuts easily by using React's state system. Build a simple password validator. This iwll be a text input that requires the user to enter a password that is at least 4 characters long. If the user enters a password that is less than 4 characters, a small warning message will be displayed.

The Goal:
1. Whenever a user types in the text input, update the password piece of state.
Hints:
1. You will need to add the props onChnage and value to the text input in the validator.js file.
2. Whenever user types in the input, the function you provide to onChnage will be called with an event object. If you look at event.target.value (or e.target.value if you want to use the abbreviation) you'll get the current text in the text input.
3. Use that value to update the password piece of state.
4. Don't forget to assign the value prop back to the input!.

88. Exercise Solution:

    value={ this.state.password }
We going to take whatever the current value is of this state and assign to the value prop of this input. Then we'll add in an 'onChange' prop. So when user makes a change to the input we going to
make sure that we take that updated value and use it to update our password piece of state.

class Validator extends React.Component {
    // State is being initialized in a slightly different way than is shown
    // in the previous videos. You can ignore this different syntax for now.
    constructor(props) {
        super(props);
        this.state = { password: '' };
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Enter Password</label>
                        <input 
                            type="password"
                            value={ this.state.password }
                            onChange={ e => this.setState({ password: e.target.value }) }
                        />
                    </div>
                    {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
                </form>
            </div>
        );
    }
}

89. Handling Form Submittal:

Now our search bar knows what user is typing into that input. Now we need to make sure that if the user presses on the enter key after entering some search term, we want to somehow trigger a search for some images and then show those images on the screen. 0:23

1. When user press Enter key - will trigger a search.
2. By default the form will automatically submit when user has typed in text/info into search bar and press Enter Key. However, we need to prevent this default behavior by writing a onSubmit event handler function at the top of the class and then more code within the return method -> form element and the input element. So the callback will get evoked.

The below code will give me an error in my console:

The Code:
        console.log(this.state.term);

The Error that I expect:
    TypeError: Cannot read property 'state' of undefined

90. Understanding 'this' in JS:

We've put a 'onFormSubmit' event handler on our Form element. We've passed a callback fn, and then we saw several times that the callback fn was successfully being called as after we added event.preventDefault(), the browser no longer automatically refresh itself.

Why are we seeing the error message?
It's a common error msg so important to understand why we are seeing it - root cause.

It means:
I cannot access the property state on the value underfined.
Undefined is a value inside of JS. If you tried to access a property on undefined, such as undefined states, you're going to get the same error msg.

Our console logout is trying to access this.state not undefined. So JS thinks that inside of this onFormSubmit(), 'this' is not equal to our instance of the search bar class but equal to the value of
undefined.

1. What is 'this' keyword used for in a class?
2. How is the value of 'this' determinded in a function?

The 'this' keyword is used for to point to proprties (i.e. term) or fn's (i.e. onForSubmit) within the same class. See the lectures diagram.

Good example that makes use of the 'this' keyword inside of a method on a class;

// An object called 'Car':
class Car {
    setDriveSound(sound) {
        this.sound = sound;
    }

    drive() {
        return this.sound;
    }
}

// An instance of the 'Car' object which is a class.
const car = new Car();
car.setDriveSound( ''vroom );
car.drive();

So to find out what 'this' value is equal to that is inside of a method on a class, we look not at the method itslef, we look at where we call the method, i.e. car.drive()
That is where we are calling 'drive()'
The rule is we find the function name, it is drive().
We look at the dot to the left of the fn, then the variable that is referenced to the left hand side. So it is the 'car' variable that the 'return this.sound' will be equal to inside of the drive() fn.
So, return this.sound will be equal to the 'car' variable or the instance of the car class
So to find out what the value of 'this' inside of the method, you don't look at the method but the where the method is called, you look at what is to the left of the dot when the fn (i.e. drive) gets called.
So when drive gets called, 'this' is equal to our instance of the Car.

We can write another instance of the 'Car' called 'truck' that uses the same 'this' keyword but to output a different sound when we call that truck fn:

const truck = {
    sound: 'putputput'
    driveMyTruck: car.drive;
}

truck.driveMyTruck()

// I can assign the drive() to a variable called 'drive':
const drive = car.drive;

// Then call the drive fn:
drive();

// An error msg is return as there is nothing to the left of it, so its undefined. Should be:
car.drive();

























