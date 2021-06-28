/*

The 'Clock' class below is trying to implement a clock display that updates every second. Right now, abeginner engineer tried putting the component together, but they're finding that they can't get the time to update!

Your Goal:
  Update the 'Clock' class so that it properly updates once per second.
Hints:
  You definitely need to use 'state'. Make sure you initialise the 'state'  object.
  Remember that you can get your component to update by calling 'setState'.
  Remember that you only update state by calling setState.

*/


/* 

Before refactoring:

<script type="text/babel" data-presets="env,react">

        componentDidMount() {
            setInterval(() => {
                this.time = new Date().toLocaleTimeString()    
            }, 1000)
        }
        
        render() {
            return (
                <div className="time">
                    The time is: {this.time}
                </div>
            );
        }
    }


    // Renders the App component into a div with id 'root'
    ReactDOM.render(<Clock />, document.querySelector('#root'));

</script>

*/

// The Solution: My code: refactor the code to develop a Clock to show the current time and updates once per second.
// The 'Interval' is a built-in JS function and will run the inner function 'new Date()' once every second.
// Once every second will date the time and print it out as a string value and assign it to the 'this.time' property.
// Currenlty the component is not updated and don't show the time on the UI.
// We need to set our time on state as opposed to this little instance variable of 'this.time'.


<script type="text/babel" data-presets="env,react">
class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() };   // Initialise our state object. Default the time to an empty string.

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })  // Inside the 'setInterval()' we don't need the 'this.time' function. Replace with 'setState' call, which is an object that will update the time property 
        }, 1000)  // Every second will run the 'setInterval()', and call setState whcih will cause our component to render itself automatically.
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}  // Replace this.time to this.state.time
            </div>
        );
    }
}


// Renders the App component into a div with id 'root'
ReactDOM.render(<Clock />, document.querySelector('#root'));
</script>


















