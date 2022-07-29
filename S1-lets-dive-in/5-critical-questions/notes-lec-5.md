# Section 1 - Let's Dive In!

Lecture 5 - Critical Questions:

1. How is React all about?
   React dose 2 things for us:
   What's React all about?

   - React(1) display HTML and (2) changes that HTML when the user does something. It is html that is casuing content to screen of the user's browser. Think of React as like a wrapper around html.
   - We tell React what content we want to show on screen by writing functions that return JSX, which is code that looks like html: <div><h3>Hello</h3></div>
   - JSX tells React about the individual elements we want to create on the screen and show to user.
   - So we write functions, pass them to React, then React will output the content to the screen.
   - The functions that return jsx are referred to as react components. This is the primary way we work with the react library.
   - We'll write functions that return jsx. A single project can have many different components inside of it.
   - Each component will return some jsx or another component -> we can use component nesting.

   If a tag starts with an uppercase letter we are telling React to find another component inside of our app and show that jsx on screen:
   <ContactList />
   This would be component nesting which we will be using a lot.
