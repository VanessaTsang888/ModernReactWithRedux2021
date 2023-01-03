// Make use of the ProfileCard component so import it here. Get the file from the same directory.
// L34 - When importing imgs we need the file extension.
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

// App component. Show a green banner at the top. Show 3 copies of the ProfileCard component.
// Add the attributes to our custome component of ProfileCard so we can use the props system in the ProfileCard.js component as the first arguement.
// Show images using Image tag > write reference to an image.
// Handling image accessibility:

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
    </div>
  );
}

export default App;
