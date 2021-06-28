GENERAL NOTES:
index.js contains the App compenent so its acting as the App component.


SECTION 4: Structuring Apps with Class-Based Components:

L47. Class-Based Components;

How React Used to Be:

Functional Components:
Can produce JSX to show content to the user.

Class Components:
Can produce JSX to show content to the user.
Can use the Lifecycle Method system to run code at specific points in time.
Can use the 'State' system to update content on the screen.

How React Is Now:
Now Functional Components has advanced overtime - the Hooks system.

Class Components:

1. Can produce JSX to show content to the user <-> Can produce JSX to show content to the user: Hooks System - Function Components.
2. Can use the Lifecycle Method system to run code at specific points in time <-> Can use Hooks to run code at specific points in time: Hooks System - Function Components.
3. Can use the 'state' system to update content on the screen <-> Can use Hooks to access state system and update content on screen: Hooks System - Function Components.

With this Hooks system the React team has given many more capabilities to function components and though the use of this system, function components can now execute code at specific points in time, which is quivalent to the lifecycle method system tied to class components. In addition function components
can make use of the state system. So today with React function components are similar to class components as they have similar capabilities.

Companies with established projects are using Class-based components.
Companies with newer project many be using Class-based or Function-based components.
I need to understand both class components and function components with the Hooks system. I have to know both different approaches.

Example: dashboard.stripe.com/test/dashboard
This React website only uses Functional Components and there are many of them.
I can filter via class-components: inspect -> Components: I can see there are many of them in-use.
So they still use both functional and class components. This proves to me that I need to understand both.

How To Learn:
Learn Class Components -> Learn Hooks -> Learn Redux.

L48. Class-Based Components:

Going to build an app that will help me understand how class based components work, how state works, how lifecycle methods work.
An app that is going to detect what season the user is currently experiencing outside in the real world.

If the user is location in the northen hemisphere that means we have actually, we have to detect our users physical location when they visit our app.
If our user are in the northen hemisphere and its between Oct and March then it's probably going to be winter. Then render to ui: Burr, it's chilly!
And show some snow flake icons.

If the user is located in the southern hemisphere when they are visiting our app and the month is between March and October, its winter for them too.
Then render to ui: Durr, it's chilly!

If our user are in the northen hemisphere and its between March and Oct then render: Let's hit the beach!
So essentially we're just detecting what season it is based on the user's locatio and their current month it is. Render different conent based on that.

App Challenges:
1. Need to get the users physical location
2. Need to determine the current month
3. Need to change text and styling based on location + month.

Somehow in the browser we need to detect what the users physical location is.
Somehow determin the current month -> JS has APIs that can determin current date and time and getting the month.
Change text and some styling on screen based on the location and the month combined together. 

Create new app use command: create-react-app seasons

L49 Scaffolding the App:

Change into the new seasons directory: cd seasons
Start up my development server inside there with: npm start
Now I see the default React app on my screen.
VSCode -> seasons project: pull in the semantic ui library for taking care of those icons and a couple other pieces of styling that will need:
https://cdnjs.com/libraries/semantic-ui
find the css file at the bottom:
https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

To check I am running semantic css:
on the screen/browser right-click and choose inspect -> Nwtwork tab -> CSS: should see the semantic.min.css box there.

Diagram:

App Component:
to determin the location + month. Will take the season and pass it as a Prop down to the second component called SeasonDisplay.

SeasonDisplay Component:
This SeasonDisplay component is in charge of showing some actual icons and text on screen to tell the user what season it is.

Create new file: index.js
write the import statements and then the App component or function. Then write the second argument: a reference to the div with ID of root that's inside of our index.html

Create new file: SeasonDisplay.js
Write one import statement, the SeasonDisplay component and a export statement.

50. Getting a Users Physical Location
and to determine the current month.

How to determin the users physical location in the world using just functions that are built into most modern browsers.

Use the Geolocation API thats built into most modern browsers - the documentation to read:
developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
Go to: Getting the current position. A function is going to make a guess about where the user is physically located depending on couple of
parameters such as the user's IP address, different Wi-Fi networks that are visable in the area and other similar little bits of info.

In my App component, I make a call to that geolocation API. It will take a little time to get the users location and in order to get a response
from this or get some info about where that user is located I have to pass in 2 separate fn callbacks:
1. the position callback - the success callback will get called anytime.
2. the Fialure callback: error - will get called anytime that the getCurrentPosition fn is unable to determine the user's physical location.

Chrome -> inspect -> Cnsole tab: Geolocation -> coords: object -> latitude and longitude.
We going to use the Position object to get that latitude as it will tell us if the user is in the northern hemisphere or the southern hemisphere
to decide where its winter or summer.

L51. Resetting Geolocation Preferences:

L52. Handling Async Operations with Functionl components:

Timeline:
1. JS file loaded by browser.
2. App component gets created.
3. We call geolocation service.
4. App returns JSX, gets redered to page as HTML. We don't get the geolocation data back before this.
5. WE GET RESULT OF GEOLOCATION.

Problem:
We see content appear on the screen are far sooner than we ever get a result from that geo location API. The content of App component already visable on the screen.
So at the moment we don't have a good way of waiting until the success call back and then taking the position and sticking it into some JSX and return it. We don't have that
capability with a functional component.

Solution:
use a class based component in conjunction with React's state system.
Need to refact my App component into a class based component. Then look at React's state system.

L53. Refactoring from Functional to Class Components:

Problem - takes time for the geolocation sevice to return the user's location as by the time it returns user's position, we've already rendered our app component onto the screen.
With a Functional Component we don't have a good way of rendering it auto or somehow telling the app compenent to pause its rendering process. So I need to refactor to a Class Component
and tell the component to rerender itself with this new info/ update content on the screen with this new info.

Rules of Class Components:

1. Must be a JS Class (OOP).
2. Must extend (subclass) React.Component.
3. Must define a 'render' method that returns some amount of JSX.

Learn state at the same time as refacting to Class Component. 
// Class based component to render content automatically only once we have the geolocation API data returned:
// Using render method. We borrow other methods from the React.Component so we can pull lots of built-in functionality from it into our class.
// We are sub-classing React.Component.

54. The Rules of State:

Now that the refactor of the functional component is done. Now we need touse state system to solve the problem.

State System:
We will use State with Class Components. States can be used with Functional Components using Hooks System but we NOT doing this for this app.

The Rules of State:
1. Only useable with Class components.
2. You will confuse props with State.
State is a JS object that contains data relevant to a component.
3. Updating State on a component causes the compeonent to (almost) instantly render.
4. State must be initialised when a component is created.
5. State property or object can ONLY be updated using the function 'setState'. Don't do this in the way we do it in JS!

Class component -> one state property = the users current latitude, which we get out of the position object - the argument. The other properties for this Seasons app we don't care about them.

55. Important Note About super(props) Deprecation:
See my OneNote for full details:

In the upcoming lecture, we will be adding a constructor to our component and passing super(props) like so:

1. constructor(props) {
2. super(props);
3. }
Some students have noticed that their code editors have added a strikethrough to the super and a note that it has been deprecated.
The use of super(props) has not been deprecated, per the official React docs:
https://reactjs.org/docs/react-component.html#constructor
This not an actual error or issue, and you do not need to refactor your code to fix anything. This is a bug between TypeScript, React, and the code editor.


56. Initailising State Through Constructiors:

1. Make sure we initialised have initailised our State when a component is created.
2. Uupdate our State with setState after we successfully retreive our location.

React says we have to deine the fn 'render'. Otherwise we'll get an error!
The constructor fn not requested by React and it's more of a fn that belongs to the JS language itself. Will auto get called before anything else and with the props object. So we can initialise our State here.

The fn: super in the 'super(props)' will over-ride the constructor fn inside of the React.Component but we still want to make sure that all the setup code inside of this React.Component fn still gets called.
So to make sure the React.Component fn gets called, we call 'super with props'. Super is just a reference to the parents constructor fn. Now we can initailise our state object:

57. Updating State Properties:

// Initailise State by creating an object with the key value of null as we don't know what the latitude is yet. Then assign it to the 'this.state' property. Then we can freely reference the state object and the properties inside it form any fn inside of our App component, i.e. inside of my render method where we try to print out our Latitude, I could reference a JS variable 'this.state.lat'. Make use of this state property inside of our JSX (inside of render method), or other fn's insie of our components. 

      this.state = { lat: null }; 

Now, make sure that after we succeed in getting our position, we update the lat property on our state object. Anytime we update our State object, our component will instantly rerender itself. Then a new
Latitude will print out on screen. 
The render method will get called very frequently. 
Now make sure we start to cocus on making sure that we can update our state object after we get our current location. The first argument to get current position is a callback fn that will get called at some
point in the future. Take the latitude out of the position object, sue the latitude alone to update my state object using the fn 'setState'.

To update our state object, We called 'setState' which is a fn that gets put on or App component auto when we extended React.Component.
Anytime I want to update the state object, I call 'setState'. WE NEVER DO A DRIECT ASSIGNMENT TO OUR STATE OBJECT. The one single exception to that rule is when we initialise our state inside the constructor fn. Any other time we want to change, update or manipulate our state property, we call 'setState'.

58. App Lifecycle Walkthrough:

1. JS file loaded by browser.
2. Instance of App component is created.
3. App components 'constructor' gets called.
4. State object is created and assigned to the 'this.state' property.
5. We call geolocation service.
6. React calls the components render method.
7. App returns JSX, gets rendered to page as HTML.

.......

8. We get result of geolocation.
9. We update our state object with a call to 'this.setState'.
10. React sees that we updated the state of a component.
11. React calls our 'render' method a second time.
12. Render method returns some updated JSX.
13. React takes that JSX and updates content on the screen.

59. Handling Errors Gracefully:

Before we start to focus on taking this latitude and determinging what hemisphere our user is in, I need to first focus on the second callback that we have provided to the getCurrent position call.

Error callback: err => console.log(err)
Handle errors in some reasonable way.
If something go wrong with the 'getCurrentPostiton', we enter the error callback and render our component and directly tell our user that something has happened and can't tell you what your location is. 

If anything go wrong when attempting to get our current position, we are going to update the errorMessage property, which will cause the component to reRender. Show the error msg inside of our render method.
When we update our state, we not required to update every property in it, updating our state, not deleting them, only adding or changing properites on our state. Then we reference that errorMessage down in our render method.

    // errorMessage will render on screen if user has geolocation blocked
    render() {
      return ( 
      <div>
        Latitude: { this.state.lat }
        <br />
          Error: { this.state.errorMessage }
      </div>
      );
    }


60. Conditionally Rendering Content:

How to handle all 3 below senarios. In total, there's three different combinations of latitude and error message that we could run into. Use conditional rendering to do this.

1. Have latitude and No errorMessage -> Show latittude
2. No latitude and Have errorMessage -> Show error
this would occur in the case that a user denied our gelocation request.
3. No latitude and No errorMessage -> Show loading.

It will take few seconds to render something to the screen so we want to say to user: We are going to show you something interesting in just a moment. Please wait.

To handle case 2: Change this to use two if-statement:

  // RENDER METHOD:
    // React says we have to define render!! This is conditional rendering depending on the State of our component.
    // 2. Call render method again to update our component.
    // errorMessage will render on screen if user has geolocation blocked
    
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
          }

          if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>;
          }
// If the above 2 checks fail, catch all (normally this would be the 'else' part):
          return <div>Loading, please wait...</div>;
      }
  }

  Test:
  
  Case 1: Set to Ask Default, then reload the page. Click Allow will get: Latitude: 51.6778348

  Case 2: Set to Ask Default, then reload the page. This time Click the 'Block' btn. Will get: will see the Error instead.


61. Introducing Lifecycle Methods:

There is two ways to initialise State. The first way we already been through. The other way is: Lifecycle Methods. Then refactor the 'state initialisation' line of code:

this.state = { lat: null, errorMessage: '' };

A COMPONENT LIFECYCLE METHOD:

The Compenents Lifecycle:
A component is going to be created and show up in the DOM or the screen of our browser. Then at some point in time we might do something like say 'call' set state which will cause the component to rerender. Then at some point the component might be removed from the DOM altogether and stop showing its content on the screen.

1. A component lifecycle method is a function that we can optionally define inside of our class based components.
2. Will be called auto by React at certain points during a component's lifecycle.
3. The below lifecycle methods are functions that are called during very distinct or discrete time during that cycle. 

A. Constructor Funtion (I've seen this in previous lecture): I can optionally define;
B. Render: a method that is not optional as we have to define and is the lifecyle function which gets called at some point during the lifecycle of a component;
Conent Visible on Screen as some amount of JSX conent will get rendered on the screen:
C. Now, we will see a series of different lifecycle methods being called at different points in time.
D. Immediately after a component get rendered on screen, a lifecycle method called 'componentDidMount' is called. This means that if we define a Class above the render method called 'componentDidMount' :

  componentDidMount() { 

  }

This function will be auto called one time when our component first gets rendered on to the screen. So we can write some code inside this function to setup or do some initial data loading or a wide variety of different operations that we might want to do one time when our component first renders on screen.

Now, our component will sit and wait until this component is no longer shown. An update is going to come in the form of calling that set state method. Anytime we call setState and update our state, the component will render itself or essentially update itself.

Render will get called.

E. When that happens, another lifecycle method called 'componentDidUpdate' will be called automatically. If we define this function, it will be called automatically anytime our component updates itself.

Sit and wait until this component is no longer shown: some JSX will render on screen 

F. Once coponent has no more updates, then we stop showing our component on screen and the method 'componentWillUnmount' will auto be called to do some cleanup.

62. Why Lifecycle Methods?

When might we use these methods?

1. Constructor Function:
Note: The best practice says we should do initial data loading here but there is not technical reason why we can do that here like an API request or call geolocation stuff here.
Data initalisation:
this.state = { lat: null, errorMessage: '' }; 

and inital data loading (i.e. a network request to some ooutside API, where it might take the form of doing something like the geolocation):
window.navigator.geolocation.getCurrentPosition(
We want to get our users position the instant that we know that we are going to show this component on the screen. So place the code for the inside the Contructor.

2. Render Methos:
Inside of this we are going to return some JSX and nothing else.

3. componentDidMount:
Only gets invoked one time.
Perfect location to do initial data loading (one time) for our component, or to kick off some outside process like getting the users current position (call our geolocation stuff), if you only have to thing one time and in our case this is true. 

4. componentDidUpdate:
Gets called everytime as component gets updated for any reason, i.e. our state changes or our component gets a new set of props from its parent.
Data loading is done here everytime that a component is updated, i.e. if we want to make some type of network request every single time that a user clicks on a button or every time they enter some text into an input or every time that we get some new 'props' from a parent component. So if we want to make multiple data loading requests every time a component updates use this lifecycle component.

5. componentWillUnmount:
Use this method when we need to remove a component from the screen and we need to do some clean up after it.

There are 3 other lifecycle methods but infrequently used:
1. shouldComponentUpdate
2. getDerivedStateFromProps
3. getSnapshotBeforeUpdate

63. Refactoring Data Loading to Lifecycle Methods:

I have refactored the 'componentDidMount' lifecycle method. Now less lines of code.

64. Alternate State Initialisation:

We discussed that they are 2 ways to initailise our state. In Blog posts you would not see the 'Constructor' function so this alternate method exists.

The code we write here is not what actually shows up inside of our browser as the code we write run through the tool called 'Babille' - converts to JS that can be read by all popular browsers:
w: babeljs.io
Click 'Try it out' -> write our code on left, will transpile on the right side.

65. Passing State as Props:

Import the 'SeasonDisplay' into the index.js file and then inside the render method, rather than printing out the latitude, show the 'SeasonDisplay' instead as the goal is to show the current season summer or winter. So at the top of the index.js write the import line of code:

  import SeasonDisplay from './SeasonDisplay';

Create an instance of the SeasonDisplay component: <SeasonDisplay />
Tell the SeasonDisplay what latitude the user is. Then its up to the SeasonDisplay to figure out whether its summer or winter and adjust its styling appropriately.
Take our latitude stored in our state object and get that property (value of state) down into the SeasonDisplay component. Use the same prop system used in my Blog Posts Web App.
So, add on a new 'prop' with a name of simply lat for latitude, assign it a value of: this.state.lat
so we taken a property from the state on the app component and passing it as a prop down into the SeasonDisplay
This is where the two systems of props and state start to get a little confusing - we can take state from one component and pass it as a prop down to the child, in this case the <SeasonDisplay />

Now the <SeasonDisplay /> will be closely linked with the App component. Anytime we call the setState inside of the parent component of App and update the lat, the App is going to rerender itself which will cause the <SeasonDisplay /> to be updated as well as if the lat property changes the new lat value is going to be put into <SeasonDisplay /> and <SeasonDisplay /> will be rerendered as well.

Inside the 'SeasonDisplay.js' file, add the props to show the lat.

// check that I have my latitude property down in the 'SeasonDisplay' component which is the child component.
    console.log(props.lat); 

66. Determining The Current Season:

Programming is 0 based. Therefore, January is 0, Feb is 1, March is 2 etc. To test this out:
run this App in Chome, get the DevConsole up, type: new Date().getMonth()
This will give me my current month which is: 5 as it is currently June as Programming is 0 based.

THE RULES TO OUR CONDITIONAL:
Northern Hemisphere:
If user is in the Northern Hemisphere and in a month that is between April (3) and Sept (8), then they are in the Summer Season, see the instructors diagram (inside the orange boxes).

Southern Hemisphere:
If the user is in the Southern Hemisphere and in a month that is between Jan and March or Oct and Dec, then we going to say its Summer Season for them there.

Use a Ternary Expression.
If user are in the 'summer months' and are in the Northern Hemisphere, then return 'summer'. Else, return 'winter'.
Return the result of the Ternary Expression.

Use a Ternary Expression.
Determin if user are in the months of Jan and Mar, Oct and Dec, Northern Hemisphere or in the Southern Hemisphere, then return the approiate String.
If months greater than 0 and If user are in the Northern Hemisphere during the winter months, that means they are in winter. Otherwise the user must be in the Southern Hemisphere, which means they are in the summer.

I have tested my seasons app and the string 'Summer' has returned to the UI which is correct. To test further:
Console -> Sensors -> Location: change to San Francisco, and refresh page. This will change the string from Summer to Winter.
This didn't work for me as I have error message regarding font issue. See screenshot.

Next lecture, we will do some styling inside of our seasonDisply component.

67. Ternary Expressions in JSX:

Customise how the seasonDisplay component looks depending if user is in Summer or Winter months. The string and icons will change depending upon the season.

1. The text to return on screen depending on the season the user is in:
Either 'Durr, it's chilly!' or 'Let's hit the beach!'

2. The icons will change depending on the season: snow flake or sun.

First get the text on the screen.
Make the text large by wrapping the JSX in a pair of h1 tag.

68. Icons Not Loading and CORS errors:

In the upcoming lecture, we will be adding some font icons from the Semantic UI library.

There is a CDN bug that some students are hitting where the icons will no longer load and throw a CORS error after changing the browser's location sensors. Another student finally discovered the reason here.

The CDN.js docs add the integrity and crossorigin parameters to your script by default, which is breaking when we change the location sensors.

Change the script to look like this:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

Stop the server and close your browser (if you miss fully closing the browser the error will persist). Then, restart your server.

If this does not resolve your issue, you can also choose to install the CSS library locally:

npm install semantic-ui-css

Then, import the library into your root index.js component:

import "semantic-ui-css/semantic.min.css";

69. Update the SeasonDisplay Component To Show Icons:

Get my app to return icons for Summer and icons for Winter (as per the lectures diagram) using the Semantic UI library to add a little sytling to my app:
https://semantic-ui.com

Left side-bar: Elements -> Icon -> press 'ctrl + f' and search for: snowflake, then search for: sun.

In the SeasonDisplay component, we want to produce either the sun or snowflake depending on the user's season:
  season === 'winter' ? 'Burr, it is chilly' : Lets hit the beach';

To do so, make use of similar Ternary Expression as the above:
// If its winter then return the value of snowflake else return the value of sun.
  const icon = season === 'winter' ? 'snowflake' : 'sun';

Now we have 2 similar Ternary Expression, it looks a bit repetative. In both cases we have identical ternary just the variable and values are different. Later we can refactor this code.

Will take what ever the value of icon is and put it in the string/template literal to return the icons to the UI.

I have tested my app and I get x2 sun icons which is correct as I'm in one of the Summer months here. Therefore, so far all working fine.

70. Extracting Options to Config Objects:

Refactor the code as we have two duplicated Ternary Expressions (the values are different). We can do a better job in deciding what text and icon to display depending on what season the user is in
without writing 2 Ternary Expressions. Also, writing icon, icon on one line is a little confusing so need to refactor this too. So we need to update the icon variable name as well.

1. Write a configuration object called: 'seasonConfig' at the top of this file or component, just after the import React statement.
2. Inside the 'seasonConfig' object, write two 'key value pairs' inside of it: summer object {} and winter object {}
The first object will tell the App what text and what icon to use if it is summer. The second object will tell the App what text and what icon to use if it is winter.

I've removed this code:

    // Refer to variable: text inside of the component as JSX code which will be either the Winter string or Summer string.
    // Will take what ever the value of icon (above) is and put it in the string/template literal to return the icons to the UI.
    // We have the name of the icon. Then the className which is icon. Hence why there is x2 icon on same line.

    // Assigned the season variable (that is a Ternary expression) to the newly declared text variable.
    // Determin the text ahead of time. Then reference it inside the JSX. 
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

    const icon = season === 'winter' ? 'snowflake' : 'sun';

71. Adding Some Styling:

A little of acss to improve the design of the app. Go back to the Semantic ui website:
https://semantic-ui.com

https://semantic-ui.com/elements/icon.html#/definition

<i class="massive home icon"></i>

Use 'massive' in my code:   <i className= { `massive ${iconName} icon` } /> 

Create new file called seasonDisplay.css that will modify the file seasonDisplay.js
So we can select the appropriate elements and style them appropriately.
Write the css file to position the icons in the correct place. Then link up the css to the seasonDisplay.js file -> import statement.

Create a className (css version) to indicate if the app should use blue or red/orange colour icon to apply style easily. Use a Expression, use a template string and put in the actual season.
Make sure the root component has a className (season-display) = to the component name (SeasonDisplay). This will make it easier for me to apply css in the future. So SeasonDisplay component
will always have a className of season-display.

Change colour of icon depending on the season.

72. Showing a Loading Spinner:

First time UX - the first time user opens the app.

User will see a white page with text: Loading.. on top-left. Then when they click the 'Allow' button they get the season according to their location. We need to developer a better UI for when
the page is still loading up: user needs to click Block or Allow.

Loader: https://semantic-ui.com/elements/loader.html

Nice spinning icon on black background and text to tell the user 'we are trying to do something here'. This is whilst we get approval to get user's location.

To get that effect, this is the JSX code:

<div class="ui segment">
  <div class="ui active dimmer">
    <div class="ui text loader">Loading</div>
  </div>
  <p></p>
</div>

Inside of the src directory, make a new file to create a new functional component. 
Refresh browser to test this. I've tested and it works as expected.

Next lecture: customise the Spinner and change the text it shows, i.e. Please allow us to read your location so that user knows that they have to do something before the page will load up.

73. Specifying Default Props:

Customise the default Loading... text.

Pass some props into Spinner component. In that Spinner component, instead of hard coding the text Loading... we use braces to reference: props.message
So every time we make use of this component we should make use of this message and that is what will be shown right under the animated spinner.

// Default Props:

Spinner.defaultProps = {
    message: 'Loading...'
};

74. Avoiding Conditionals in Render:

Put all 3 conditional logic into a helper method/function. So when the render method gets called, the border red will get shown, call the renderContent, figur what case user is in, and
return the appropriate component.

To develop a red keyline on the outer of content no matter what the user's conditional logic (Error, Season or the Spinner), we need to develop a helper function to contain all 3 conditionals/
the code inside the render method.

Develop a helper function called renderContent, and copy & past the 3 conditionals.

75. Breather and Review:

Go through everything I've learnt inside this seasons App.

1. It's easier to read class based components in terms of code organisation -> inside of the index.js
The 'SeasonDisply' is functional component.

2. With Class component we can make sure of the state system so easier to handle user input, in my case respond to data loading events (GeoLocation API) or just load data.
3. Make use of Lifecycle Events.
4. Rules of Class Components, i.e. Must extend (subclass) React.Component: 
    class App extends React.Component
5. Class based component must define a 'render' method that returns some amount of JSX.

State: this is one of the most difficult concept in React can only be used with Class based Components.

CODING EXERCISE 4: Class-Based Components:

The 'UserForm' functional component needs to have 'state' or a lifecycle method. Therefore, refactor it to be a class-based component. It should return the exact same JSX.
Remeber that class-based components must:

Be a JS class;
Extend React.Component;
Implement a render method that returns some JSX.


76. Exercise Solution - Class-Based Components:
Done on the training website and on my class-based component: indexClassBasedCom.js

CODING EXEERCISE 05: Updating Component with State:
The 'Clock' class below is trying to implement a clock display that updates every second. Right now, abeginner engineer tried putting the component together, but they're finding that they can't get the time to update!

Your Goal:
  Update the 'Clock' class so that it properly updates once per second.
Hints:
  You definitely need to use 'state'. Make sure you initialise the 'state'  object.
  Remember that you can get your component to update by calling 'setState'.
  Remember that you only update state by calling setState.



77. Updating Components with State - The Solution:

Done. See class-based component named: indexClassClockStte.js and screenshot.













































