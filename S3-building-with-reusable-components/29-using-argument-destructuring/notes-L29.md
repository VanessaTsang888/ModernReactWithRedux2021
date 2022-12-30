# 29 Using Argument Destructuring

In our ProfileCard component -> jsx: we've repeated this Key-Pair-Value and when our project gets more complext this will get duplicated even more which is not best practice to keep repeating code. Therefore, we can do better. We can declare variables at the top of the ProfileCard component/func, and assign each one with a value. Then within the return statement we only need to write those variable name inside a set of braces.

```js
function ProfileCard(props) {
  const title = props.title;
  const handle = props.handle;
  return (
    <div>
      <div>Title is {title}</div>
      <div>Title is {handle}</div>
    </div>
  );
}
```

## Destructuring

Where we pull off a property (key) from an object and create a variable with a same name at same time.

1. replace the 2 lines of code that is declaring variables and assigning it to a value with one single line of code that is equivalent.

```js
function ProfileCard(props) {
  const { title, handle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Title is {handle}</div>
    </div>
  );
}
```

the values from the variables title and handle will be taken from the props object.

1. Create a new variable called title and give it the value of props.title
2. Create a new variable called handle and give it the value of props.

### Destructuring in argument list

Use destructuring featur again but we're going use it in the argument list instead.
This means take that first argument that is coming into our func. Create new variables called title and handle and assign them the values of props.title and props.handle
This pattern is destructuring from the argument list extremely frequently on professional projects as there are many scenarios where we don't make use of the entire props object. We still receive the whole props object but we don't care about all the different properties that might be inside of it. We only care about certain properties which we've used inside of the argument list below

```js
// The argument list is inside of the ProfileCard func.
function ProfileCard({ title, handle }) {
  //   const { title, handle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Title is {handle}</div>
    </div>
  );
}
```

We will be using this destructing feature a lot in this course. Now the code is condensed, easy to read and easy to understand.
Test in browser and will printout as before which is what I expect. Jus the code is a lot more cleaner and s
