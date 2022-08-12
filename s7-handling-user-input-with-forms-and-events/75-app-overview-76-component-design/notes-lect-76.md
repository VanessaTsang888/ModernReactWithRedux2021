# Component Design

I've started up my new React App called: pics.

The approach to the design of our project.

**App Challenges**

- Need to get a search term from the user.
  Geting user feedback.
- Need to use that search term to make a request to an outside API and fetch data.
  Get that text from search input and do a search with that text.
  We going to use an open source public service, will give us back a list of images..

- Need to take the fetched images and show them on the screen in a list.  
  Use a little css code with our React code.

Looking at the wireframe, how do we break this up into different components? We like to break up our app into multiple separate components so they are reusable in the future in case we need to further develop this app or project.

## Component to Develop.

1. SearchBar - this will be responsible for showing a text input at the very top of the screen. Anytime user type inside this input, the SearchBar will handle that typing event.

2. ImageList - will take a list of images and just render them out as a list on the screen.

**Component Hierarchy**

App: SearchBar | ImageList

The App component is going to show an instance of the the SearchBar and an instance of the ImageList.
