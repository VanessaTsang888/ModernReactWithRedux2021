// write a component and export it. Then show it inside of the App.js file.
/*************************************************************************************************************
32. The Most Common Props Mistake:
Typo whilst we write our attribute names inside of the App.js file and then React try to look this up from the
child component and a bug is created as we don't see the data we extpect on the screen causing us to have to 
inspeact the UI to find the error msg of: undefined.
We can also use the console.log() statement and add-in the title and handle props names inside of the child 
component to. Then when we inspect the UI -> Console tab: we can verify that our component is receiving the 
data that we expect it to. If there is a typo bug then will receive the error of: undefined next to the value
it is concerning.
**************************************************************************************************************/
function ProfileCard({ title, handle }) {
  console.log(tatle, handle); // Debugging to find the error in the UI -> Inspect the UI. Typo in the word: title.

  const { title, handle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
