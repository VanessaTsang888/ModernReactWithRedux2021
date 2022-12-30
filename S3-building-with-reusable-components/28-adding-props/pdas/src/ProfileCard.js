// write a component and export it. Then show it inside of the App.js file.
/***********************************************************************************************
Use the props system -> first argument is the props which we can call it anything we want.
Then we can use it however we want such as use braces to dynamically printout certain data.
We wrote out this component once and this func is being called 3 times by React. Each time its 
being called its being given a different props object (the first props argument) and this is 
how we can customise our ProfileCard component - don't need to write the JSX over and over again.
*************************************************************************************************/
function ProfileCard(props) {
  return (
    <div>
      <div>Title is {props.title}</div>
      <div>Handle is {props.handle}</div>
    </div>
  );
}

export default ProfileCard;
