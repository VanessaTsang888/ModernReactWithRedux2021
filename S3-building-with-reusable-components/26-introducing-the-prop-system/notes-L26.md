# 26 Introducing the Props System

The App (parent) component job is to take each piece of info such as the image communicate that down to each of the ProfileCard (child) components -> example, Please display a title of 'Alexa', a twitter handle of '@alexa99', ...etc...

## Props System

Props is an Object that we use to customise itself.

1. Pass data from a parent to a child.
2. Allows a parent to configure wach child differeently (show different text, different styles, etc).
3. One way flow of data. Child can't push props back up.
4. Like 25% of understanding React.

### How to use the Props System

1. We create our Parent Component and return our child component and add attributes to the jsx element.
2. React collects the attributes and puts them in an Object, e.g. from color attribut to key-value-pair object.
3. Props object shows up as the first argument to the child component function.
4. We use the props however we wish e.g. printout the color from the Prop -> access the color property to get back the color of red.

Parent Component: App.js

```js
function App() {
  return <Child color="red" />;
}
```

Props Object -> { color: 'red'}

Child Component: ProfileCard.js

```js
function Child(props) {
  return <div>{props.color}</div>;
}
```
