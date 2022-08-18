# 138 Building and Styling the Accordion

**_The Task_**

- Render the list of items:
  In the Accordion component, take the list of items and render them out as as a list using the map method. This is where we return some jsx which includes className which are coming from the Semantic UI library.

Now in the return statement -> second div -> icon tag (for the dropdown icon) and printout the item's title.
[More about the icon tag - W3Schools](https://www.w3schools.com/icons/tryit.asp?filename=tryicons_awesome5)

- Return the list of items:
  In the Accordion component -> second return statement -> replace h1 with a div. The className will be used to receive styling from the Semantic ui library.

- Wire up Semantic UI:
  This is for the styling of our Accordion so we don't need to write our own CSS code. Do this in the index.html file -> inside of the head tag.

Double Boarder Problem -> x2 boarders - gray line displayed caused by the top level element - the div within the first return statement. This extra div applied the second boarder at the top. To resolve this problem, change that div into a React Fragment, keep the key of item as we still need to display the title from the item of the items array.

Problem
The first div tag inside of the first return statement created an extra boarder at the top which we don't want. To resolve this problem we use a React Fragment so that we don't get that extra element but just jsx containing element that React understands that we have x2 div's inside of it.

**_The Up_**

To apply some functionality to our Accordion we will use the React Hook System.
