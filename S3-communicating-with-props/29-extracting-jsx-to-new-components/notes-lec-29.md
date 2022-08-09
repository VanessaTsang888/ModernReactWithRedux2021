# 29 Extracting JSX to New Components

Creating a Reusable, Configurable Component:

1. Identify the JSX that appears to be duplicated.
2. What is the purpose of that block of JSX? Think of a descriptive name for what it does.
3. Create a new file to house this new component - it should have the same name as the component.
4. Create a new component in the new file, paste the JSX into it.
5. Make the new component configurable by using React's 'props' system.

** 2 - First JSX **

Give the first jsx a name. Its giving detail on a single comment so we call it: comment detail.

** 3 - Create new file to house the component **
This file will have same name as the component. So now inside of our src folder, we create new file called CommentDetail.js

** New Component & past JSX **
Now write some code for new component and past first jsx from index.js file.

** Use the React prop system **
We don't want to hard code data so we use the React prop system.
Not every single comment that we want to show inside of our app is going to have same author, time and content assigned to it. So anytime we try to show the comment detail on the screen as a component, we are going to want to be able to customise it when we create the component. The prop system allows us to configure how a component behaves or the content that it shows.
