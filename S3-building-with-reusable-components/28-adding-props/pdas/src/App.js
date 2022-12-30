// Make use of the ProfileCard component so import it here. Get the file from the same directory.
import ProfileCard from "./ProfileCard";

// App component. Show a green banner at the top. Show 3 copies of the ProfileCard component.
// Add the attributes to our custome component of ProfileCard so we can use the props system in the ProfileCard.js component as the first arguement.
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

export default App;
