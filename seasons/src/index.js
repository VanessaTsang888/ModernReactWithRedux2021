import React from 'react';
import ReactDOM from 'react-dom';

// Make a call to geolocation API, 2 callback fn's: 1. the position callback - the success callback will get called anytime.
// 2. the Fialure callback: error - will get called anytime that the getCurrentPosition fn is unable to determine the user's physical location.
// Use the Position object inside App component to get that latitude as it will tell us if the user is in the northern hemisphere or the southern
// hemisphere to decide where its winter or summer.


// Class based component to render content automatically only once we have the geolocation API data returned:
// Using render method. We borrow other methods from the React.Component so we can pull lots of built-in functionality from it into our class.
// We are sub-classing React.Component -> 
// React says we have to deine the fn 'render'. Otherwise we'll get an error!
// The constructor fn not requested by React and it's more of a fn that belongs to the JS language itself. Will auto get called before anything else and with the props object. So we can initialise our State here.
class App extends React.Component {
    constructor(props) {
      super(props);
  // THIS IS THE ONLY TIME we do diret assignment to 'this.state'.
      this.state = { lat: null, errorMessage: '' }; // Initailise State by creating an object with the key value of null as we don't know what the latitude is yet. Then assign it to the 'this.state' property. Then we can freely reference the state object and the properties inside it form any fn inside of our App component, i.e. inside of my render method where we try to print out our Latitude, I could reference a JS variable 'this.state.lat'. Make use of this state property inside of our JSX (inside of render method), or other fn's insie of our components. 
      // 1. Get user's current location.
      // The first argument to get current position is a callback fn that will get called at some point in the future.
      // Call this setState, pass it an object that has the update to state that I want to make, in this case I use the position object and some property in there to update my lat property on my state object.
      // 
      window.navigator.geolocation.getCurrentPosition(
        position => {
          // Give it the callback. Will run only when we successfully fetched user's position.
            // to update our state object, We called 'setState' which is a fn that gets put on or App component auto when we extended React.Component. This is the callback that will get called.
            this.setState({ lat: position.coords.latitude });
        },
// Error callback:
        (err) => {
          this.setState({ errorMessage: err.message });
        }
      );
    
    }

    // My component was rendered to the screen:
    componentDidMount() {
      console.log('My component was rendered to the screen');

    }

    // My component was just updated - it rerendered:
    componentDidUpdate() {
      console.log('My component was just updated - it rerendered!');

    }

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
  
  // show an instance of my App component, second argument: a reference to the div with ID of root that's inside of our index.html
  ReactDOM.render(
    <App />, 
    document.querySelector("#root")
    );





  