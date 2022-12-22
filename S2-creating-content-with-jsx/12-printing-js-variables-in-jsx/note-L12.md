# Lecture 12 Printing Javascript Variables in JSX

How can we dynamically figure out what content we want to display inside of our component?

Example: <h1>Hi there!</h1>
So instead of having a hard coded Hi there text, myabe we want to do some computation and decide what to show on the screen depending upoln the result of a network request or maybe some user input etc.

4. Create a component.
   Write a variable and assign it to a String and store it in that variable.
   Generate a number using the Math.random() redefined method. The condition is: if the number in question returned is greater than 0.5 then execute the code in the code body which is change the message to Hello there! by reference the variable of message - dynamically using a set of braces.
   The reture statement takes whatever value is inside of the message variable and print it up inside the h1.

```js
function App() {
    let message = 'By there!';
    if (Math.randon() > 0.5) {
        message = 'Hello there!'
    }

    return <h1>{message}</h2>;
}
```

For me the logic is simple, the msg displayed on screen will depend on the num returned by the predefined method.

The braces means we are about to reference a JS variable or expression. We use this syntax anytime we need to printout a String or a Number (num). There are other values we may want to printout but we may get error msg,
e.g. a Boolean of true or false, or null or undefined. This will not printout anything. If we try Array, we'll get unexpected resul: const message = [1, 2, 3]; -> 123
If we try to printout an Object inside of JSX, we'll get an error msg: Inspect browser -> Console: Uncaught Error: Objects are not valid as a React child...

React cannot show an object as text content:

```js
function App() {
    let message = { color: 'red'};
    if (Math.randon() > 0.5) {
        message = 'Hello there!'
    }

    return <h1>{message}</h2>;
}
```
