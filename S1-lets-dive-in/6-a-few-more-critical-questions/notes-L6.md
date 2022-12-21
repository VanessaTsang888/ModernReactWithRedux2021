# Section 1 - lecture 6: A Few More Critical Questions

**_Vanessa's extra notes:_**
This translation web app uses x2 react hooks, x1 custom react hook (useTranslation) which is in the translate.js file.
Also in this file we import and use Axios which is a library that allows our frontend to communicate with the backend server-side (Endpoint Mapping). We use this library also to make requests to the Google Translate API, return data from it, and then do things with that data in our React app. Axios is a popular HTTP client, which allows us to make HTTP requests from the browser.

Lecture 6. A Few More Critical Questions.
Question 1 we went through in previous lecture.

## Question 2: How does a React app start up?

Its a 3 step process:

1. All of your project's js files are 'bundled' together into a single file, then placed onto a server.
2. User makes a request to the server and get an HTML file + the bundle.
3. User's browser executes your code.

S1: A typical JS project will have many JS files inside of it. It's inefficient to send a bunch of small files to a user's browser.
So the JS files get combined to one file named: bundle.js | also sometimes called the App Bundle. In reality this file is not named bungle.js
but has some kind of identifier as its name: qwerrtyyuuiuiop.js | contains all the code for our entire app.
Then this is placed on the server so users can access it in the browser.

S2: User types web address in url and that will make a request for our bundle.js. The server will respond with the index.html file.
Every React project has this file. This file will get loaded up in the browser. This file don't have much in it, normall just script tags or link tags that tell the browser it needs as it tell browser it need to fetch some additional JS file from the server - the bundle.js file.
The browser will execute this file. The index.html file is in the public directory. This contains script that says: do additional load of
some JS that contains our actual React app.

S3: Browser executes our code.
index.html ->

```html
<div class="container" id="root"></div>
```

bundle.js (running code that was in index.js)

```js
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root render(<App />)
```

Now that both the index.js and the bundle.js files has been loaded up in browser. Do the React Startup Process:

S1. Find the div with id of 'root' in the DOM:
-> run this line of code:

```js
const rootElement = document.getElementById("root");
```

S2. Tell React to take control of:

```js
<div id="root"></div>
```

-> run this line of code:

```js
const root = createRoot(rootElement);
```

Eventually render our app in this dev element.

S3. Take that JSX syntax, turn it into HTML and show it inside of that div `<div id="root"></div>`

## Question 3: What were the 'useState' functions?

```js
export default function App() {
  const [language, setLangeuage] = useState("es");
  const [text, setText] = useState("");
}
```

The useState functions are tied to the React state system which is kind of like a variable in the world of React. We make use of state to store data that is going to change over time as a user interacts with our app. Anytime we update State, React will auto update the content that is displayed on screen. The state system is one of the most complicted aspects of React.

Our translation app has 3 pieces of data that would change over time as the user interacted with our app, and those were the text that user typed into the input field, the language the user wanted to translate text to, then the translation results. Anytime any of these 3 data change we want to update what's on the screen. So a single call to the state function to set up each of these pieces of data.

The first call to the useState is: const [language, setLangeuage] = useState("es");
This sets up the state system and says that we're going to have some kind of selected language that is going to change over time.

The second one is tied to the text that the user types into this text input:

```js
const [text, setText] = useState("");
```

The third call is inside of: src\components\translate.js: const [translated, setTranslated] = useState("");
This useState call is tied to the actual translated result that gets displayed at the bottom of the screen.

## Question 4: How did the text get translated to another languae?

We fed in 2 pieces of date, the text from input and the selected language into the Translate component.

**_Translate Component:_**

1. Did the text or language change?
2. If so, make a network request with the new text/language -> Google Translate API.
   Then will display the result on screen.
