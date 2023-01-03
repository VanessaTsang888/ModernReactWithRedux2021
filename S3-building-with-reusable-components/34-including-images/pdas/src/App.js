// Make use of the ProfileCard component so import it here. Get the file from the same directory.
// L34 - When importing imgs we need the file extension.
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

// App component. Show a green banner at the top. Show 3 copies of the ProfileCard component.
// Add the attributes to our custome component of ProfileCard so we can use the props system in the ProfileCard.js component as the first arguement.
// Show images using Image tag > write reference to an image.
// Show external image: <img src="https://picsum.photos/200/300">

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <img src={AlexaImage} />
      <img src={SiriImage} />

      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
