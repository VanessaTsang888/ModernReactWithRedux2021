// write a component and export it. Then show it inside of the App.js file.

/*************************************************************************************************************
Use the props system -> first argument is the props which we can call it anything we want.
Then we can use it however we want such as use braces to dynamically printout certain data.
We wrote out this component once and this func is being called 3 times by React. Each time its 
being called its being given a different props object (the first props argument) and this is 
how we can customise our ProfileCard component - don't need to write the JSX over and over again.

Destructuring in the argument list -> in jsx, we don't need reference the props but only props name in braces.
Destructuring x2 variables instead of writing x2 lines of code to declare variable and assign it a value twice.

L35 Handling image accessibility: write the attributes of alt and title for accessibility. The title attribut is 
a tool-tip.
L38 A Big Pile HTML: lots adding additional elements (div's) to this Component to style our card/project. 
**************************************************************************************************************/

function ProfileCard({ title, handle, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" title="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
