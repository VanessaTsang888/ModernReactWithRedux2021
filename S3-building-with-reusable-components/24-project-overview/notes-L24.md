# Project Overview

Personal Digital Assistants (PDAs) x3. These are AI powered voice programs such as Alexa, Corana by Microsoft and Siri by Apple. Going to show some info for each PDA:

1. image/logo
2. Name
3. Twitter handle
4. short description

We have some duplicated looking content over the 3 PDAs. The structure/layout of the 3 pannels is identitcal. This mean we can create a reuseable component which we can reuse several times. This will save us alot of time to build our projects very quickly. This is what we are going to do. How we going to write reusable components and how do we build an App out of them?

## How to approah this project

We have two options.

1. Write out the entire thing which is not best practice and not the point of React.js
   In the App Component, write all the JSX - one for each PDA: Alexa | Corana | Siri. We will have a lot of duplicated JSX - not a good approach. If we decide we wish to change all the h3 to h2, then we'll need to do that for all the cards but could accidenly miss one of them.

2. Write a reusable component that shows a single card such as: ProfileCard Component.

```js
function ProfileCard() {
  return (
    <div>
      <img />
      <h3>...</h3>
    </div>
  );
}
```

Then reuse this component inside of our App Component three times:

```js
function App() {
  return (
    <div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}
```

Now 3 different profile cards will show up on screen.
Customise which 4 piecs of content we want to show inside of ech component.

### Component Hierarchy

Helps us understand the relationship between our components. so the App is showing 3 copies of the ProfileCard component. The App comonent is the Parent and the 3 ProfileCard are Children. We could say that the ProfileCard are siblings of the App component.

ProfileCard.js -> will create a single card.
App.js -> creates a component that shows 3 copies of ProfileCard
index.js -> shows the App component on the screen.

## Generate new project

do this in Terminal.
Change into the correct dir.
` $ npx create-react-app pdas`
