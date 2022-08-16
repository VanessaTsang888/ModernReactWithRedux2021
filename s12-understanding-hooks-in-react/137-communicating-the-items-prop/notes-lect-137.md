# 137 Communicating with Items Prop

**_The Task_**

1. Create Accordion component then show that inside of App component.

2. In the App component, import the Accordion from the component directory. Instead of return h1, return the Accordion component using a div tag. Test in the UI. In this same file, create (hardcode) the array of 'items' and pass it down as (or communicate down) 'Props' into the Accordion.

3. In the Accordion component we need to receive the items Prop (list of items)that has been passed from the App component. Then we can loop over it or map it and build out a list of different items to show to the user.

To render out that list of items on the screen and test in the UI, we delete the text in the h1 and print out the number of items we received from the items array.

**_My Blocker_**

When I print out the items array on the screen, in my Terminal I received a Warning of:

Line 32:1: Assign arrow function to a variable before exporting as module default import/no-anonymous-default-export

Therefore, I checked the Q&A. This is where I found out that previously a student AB had same problem as me and the Teaching Assistant gave him a solution that worked. I used the same solution to refactor my code and it worked.

The Solution given by the Teaching Assistant is:

This is simply a linter warning thrown in React v17 that is letting you know that it may be wise to use named exports. It can be suppressed by refactoring the component or function like this:

```
const someFunction = () => {
    ...
  }
};
export default someFunction;
```
