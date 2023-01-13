# Picking a Random Element

Create a func that is going to return a random animal > a func that returns a random String.

This will give us a decimal number.
`[Math.random() * animal.length]`
We need to round it down go get an integer.
`[Math.floor(Math.random() * animal.length)]`
To test this we run the func:
`console.log(getRandomAnimal())`
Now in browser > inspect > Console tab > we see the data which is a different animal every time we refresh the browser.

```js
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}
console.log(getRandomAnimal());
```

When user click on the btn, we going to get random animal and add to our
piece of state. Our animal state is going to be an array of Strings.

Updat/clean-up the App Component as we not going to t=use the count variable.
Delete the useState() hook/func.

Every time user click the btn, will run this func, and add-in a random animal in our animals array > up-date our piece of state. We never directly update our piece of state `animals = 4`. Instead we have to use the setter func `setAnimals` so React knows that an update is occuring. So we call the `setAnimals()` func, take current animals array, take all the elements inside there. Add an random animal to the very end. To use a special state up we going to
