# 28 Adding Props

Time to code up/add props to our web app.

1. In App.js add the attributes to it.

```js
function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}
```

2. This happens automatically as React takes those attributes and put then inside an Object (key-value-pair).

3. Those objects will show up inside of our ProfileCard component as the first arguement. So will receive that props object and make use of it inside of our component/ProfileCard func. We usually call it props but we can call it whatever we want. For now we just printout the title and handle for each of our PDAs. Since we want to printout a JS variable, we need to wrap in braces.

ProfileCard.js

```js
function ProfileCard(props) {
  return (
    <div>
      <div>Title is {props.title}</div>
      <div>Title is {props.handle}</div>
    </div>
  );
}

export default ProfileCard;
```

Now in our browser we see x3 profile cards. We are now showing 3 separate copies of ProfileCard components and we only wrote out this component one time and the func inside of the ProfileCard component is being called three times by React. Each time its being called its being given a different props object (the first props argument) and this is how we can customise our ProfileCard component - don't need to write the JSX over and over again. Therefore we can easily customise our ProfileCard component by using the props system.
