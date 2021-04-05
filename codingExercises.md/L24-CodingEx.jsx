// Test Your Knowledge: JSX Interpolation:

/* 

The App fn below returns some JSX that has a harcoded value for the current time.
Chances are that the time isn't correct.

1. Use the 'getTime' fn to make sure the App component shows the current time!

Remember, you can show a JS variable - or event the result of a fn call - by using braces like so: '<div> { myJSVariable } </div> '

My Solution:

*/

<script type="text/babel" data-presets="env,react">
    function getTime() {
        return (new Date()).toLocaleTimeString()
    }

    // Creates a functional component
    const App = () => {
        return (
            <div>
                <div>Current Time:</div>
                <h3>{ getTime() }</h3>
            </div>
        );
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>

// Exercise 1: JSX Interpolation:
// I changed the h3 tag code to display the current time by calling the getTime fn using a pair of braces.




