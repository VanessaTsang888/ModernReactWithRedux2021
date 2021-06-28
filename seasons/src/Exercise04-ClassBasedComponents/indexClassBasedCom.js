import React from 'react';
import ReactDOM from 'react-dom';

// Replace functional component with a Class declaration:
// Wrap the return statement with all the JSX inside of it inside of a render method.
// Renders the App component into a div with id 'root'

<script type="text/babel" data-presets="env,react">
    class UserForm extends React.Component {
        render() {
            return (
                <form>
                    <label>Enter a username:</label>
                    <input />
                </form>
            );
          };
    };

    ReactDOM.render(<UserForm />, document.querySelector('#root'));
    </script>




/* 

Before refactoring:

<script type="text/babel" data-presets="env,react">
    class App extends React.Component
    const UserForm = () => {
        return (
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
        );
    }


    // Renders the App component into a div with id 'root'
    ReactDOM.render(<UserForm />, document.querySelector('#root'));
</script>






<!--The App component above will be rendered into this-->
<div id="root"></div>


<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script crossorigin src="https://unpkg.com/@babel/standalone@7.0.0/babel.min.js"></script>
<script crossorigin src="https://unpkg.com/@babel/preset-env-standalone@7.0.0/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/redux@4.0.1/dist/redux.js"></script>
<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

*/