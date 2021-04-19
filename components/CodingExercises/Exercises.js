// Coding exercise 2: Test Your Knowledge: Props
// Make the Message component more useful than it is.
// 

    const App = () => {
        return (
            <div>
                <Message header="Atention!" text="We did an update" />
            </div>
        );
    }
    
    const Message = (props) => {
        return (
            <div className="ui message">
                <div className="header">{props.header}</div>
                <p>{props.text}</p>
            </div>
        );
    }
    

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
