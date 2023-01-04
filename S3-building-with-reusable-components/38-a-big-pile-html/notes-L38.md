# 38 A Big Pile of HTML

Within the Bulma > Components > Cards section, the html code block, we need to use this syntax in (a lot of div's)/ add all these additional elements to our project to get our ProfileCard to look really nice (with a couple of minor tweeks).

**_Resource_**
[The card component on Bulma](https://bulma.io/documentation/components/card/)

## Adding additional elments to ProfileCard.js

We MUST use the exact but its classNames not class as we are writing React not html. Otherwise Bulma will not find our elements and our project will not style correctly.

For the x2 jsx, change the div elements to paragraph elements. Add className to both, delete the plain text.

At the moment the images are massive as the element not sized corretly. We can fix this easily by adding a little additional html - structure so all 3 cards sit next to each other > App.js file > wrap the x3 custom React Components inside a couple of html elements.

Duplicate the each div > className > column is-4 > three times as one for each Component. Cut/past each ProfileCard into one of those div's.

### Result

I have managed to style all 3 cards but the layout is not 100% the same as the instructor's end result and I think this is due to Bluma?
I actual like the result of my accidently layout as it looks aesthetically pleaseing. I've compared my code with the instructors code and I can't see what is the difference. Therefore, for now I will keep my version and continue with the next lecture.
