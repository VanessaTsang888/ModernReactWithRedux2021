// Make use of the ProfileCard component so import it here. Get the file from the same directory.
import ProfileCard from "./ProfileCard";

// App component. Show a green banner at the top. Show 3 copies of the ProfileCard component.

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}

export default App;
