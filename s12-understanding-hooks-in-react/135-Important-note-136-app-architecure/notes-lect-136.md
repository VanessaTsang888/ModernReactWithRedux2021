# 136 App Architecture

I've started up my React App again as I've amended the directory that this project is inside of. Now, have the React default page again and ready to start this lecture.

We going to architect this as if we are using class based components and think about state.
Will have two componets.

1. App (with items prop) -> will coordinates info across our entire App.
2. Accordion -> in charge of showing the entire piece of content.

The items prop will be inside of the App component and pass down as a prop into the Accordion.
The Accordion will decide what set of questions and answers to show on the screen based upon this items prop.

**_items prop_**

An array of objects for each object iniside of there we give it a title and content property.

**_State_**

What different pieces of state do we neeed to actually implement this App?
Only one change -> which questin is expanded and displayed to the user?
We only want one question displayed at a time - will set this requirement up later. Can only be one active question at a time. So one piece of state, may be an index or a num? The index of the active question should be displayed on screen.

- define the activeIndex piece of state inside of the Accordion component. So only this component will known when this question is currently expanded.

## Set up

- Files and directories.
- Create new file called: index.js
- Create new file called: App.js -> import the react library.
- In same file, write the export default arow function -> return h1 that says Widgets App.
- I've ran the app in the UI and have the text of Widgets App displayed. Therefore, test passed. See my screen shot.
