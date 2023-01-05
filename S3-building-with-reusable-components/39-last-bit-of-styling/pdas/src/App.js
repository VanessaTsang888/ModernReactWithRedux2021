// Make use of the ProfileCard component so import it here. Get the file from the same directory.
// Add external css library called Bulma.
import "bulma/css/bulma.css";

// L34 - When importing imgs we need the file extension.
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

/**************************************************************************************************************************************************
 App component. Show a green banner at the top. Show 3 copies of the ProfileCard component.
 Add the attributes to our custome component of ProfileCard so we can use the props system in the ProfileCard.js component as the first arguement.
 Show images using Image tag > write reference to an image.
 Handling image accessibility.
 L39: style our heading located at the top of our web page using additional elements from Bulma > Layout > Hero. Show a description on each Card
 > from App.js we need to pass down another prop that will contain the description. Then use it inside of ProfileCard component. I've written an
 JS expression directly inside a set of braces (as per lecture 13) to include the current date using the JS Date func.
*************************************************************************************************************************************************/

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants: by Vanessa Tsang on{" "}
            {new Date().toLocaleDateString()}{" "}
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps us buy things online."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was made by Microsoft and helps us with our tasks."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was made by Apple and answers our questions."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
