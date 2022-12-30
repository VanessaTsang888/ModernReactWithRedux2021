# 32 The Most common Props Mistake

As we use the prop system we gling to run into a handful of different bugs as we learn.
The most common bugs are:

1. Attribut names we write in the App.js file | Typo:
   In the ProfileCard component when React is trying to look for title but we written a typo in the attribute -> App.js, then we don't get what we expect on the screen and we'll receive an error of: undefined when we inspect the screen.

**_ Catch error with the Console.log()_**
Another way we can debug our code is to write a console.log() statement to catch the error of our ProfileCard child component and add-in our title and handle.
Inspect the UI -> Console tab -> will find the error of undefined next to the value that the bug in concerning with.
