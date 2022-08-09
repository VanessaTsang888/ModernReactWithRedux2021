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
