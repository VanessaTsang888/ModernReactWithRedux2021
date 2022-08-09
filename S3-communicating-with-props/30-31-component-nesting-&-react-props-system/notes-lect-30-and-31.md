# 30 Component Nesting

For both the index and component files, we need to import the faker library to use their content.

We want to render the CommentDetail component inside of our app - within the index.js file.

- Make sure that the CommentDetail component is available inside of the index.js file. This will for the connection between our index file and the CommentDetail file.

- The export statement will make this file availabe to all other files inside of this project.
  To get access to this export statement we need to add an import statement to the index.js file:

```
import CommentDetail from './CommentDetail';
```

This will form the link between these two files and make sure our CommentDetail component is available inide the index.js file. So we are hook the two files together.
So once we get the CommentDetail hooked into the index.js we can show it inside of our app. This technique is called compnent nesting.

This is a jsx tag:

```
 <CommentDetail />
```

## Next Lecture.

Use the prop system to configure these comment details when they are created.

# 31 React Props system

Now that we have several copies of the CommentDetail component inside of our app, we need the content to be dynamic and different from each other - the name, date/time, and comment.

** Component Hierarchy **

App:

- CommentDetail
- CommentDetail
- CommentDetail

We have three instances of the - CommentDetail as the App is showing the CommentDetail or as - CommentDetail nested inside the App. So we refer tho the App as the parent commponent and the - CommentDetail as the child components or children.

## Props

- System for passing data from a parent component to a child component.
  Making sure theat the content that it displays on the screen is somewhat different or make sure the behavior of the component is different when user interacts with it.

- Goal is to customise or configure a child component.
  Show some content to user (how they look) or react to user interaction.
  The configs are known as props (similar to attributes in html).
  We use props to customise all content not just the name.
  There is no limit amount of info we can share over the props system. So we can pass down as many configs as we wish.

### Next Lecture

The Syntax in passing props from a parent to a child.
