# 27 Picturing the Movement of Data

How the data or info is flowing through our application:

We going to use the props system on our project to make sure our ProfileCard component show some slightly different info on the screen.

Passing down info from parent to child.

1. Add attributes to a JSX element - the ProfileCards child components in the App.js file.
   When we are writing our custome components, we get to decide on what attribute names we want to use. These are also known as Key-Value-Pairs. There are only a couple of attribute name we can't use as they are React's reserved keywords. We choose our key names that best represent our data. The handle is the Twitter username.

```js
<ProfileCard title="Alexa" handle="@alexa99" />
```

2. React collects the attributes and puts them in an object - 3 separate objects.
   **_Props Object:_**
   Keys: title | handle
   Values: "Alexa" | "@alexa99"

3. Props object shows up as the first argument to the child component function.
   The data will get passed down from App.js to any files with the ProfileCard() func.

```js
function ProfileCard(props) {
  return (
    <div>
      <div>Title is {props.title}</div>
      <div>Title is {props.handle}</div>
    </div>
  );
}
```

4. We use the props however we wish.
   Inside the func, we can use that props object however we wish.
   See above js code - display the title from the props dynanically. Same with the handle.
