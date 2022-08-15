# 79 Adding a Touch of Styling

External css library to add a little stying to my pics React App so I can focus on learning React rather than on CSS.

Open source CSS library - [Semantic UI](https://semantic-ui.com/introduction/getting-started.html)

This will make the text input look more styled rather than plain.

## SearchBar component

- top level dev -> write attribut of className="ui segment"
- form tag -> attribute -> write: className="ui form"
- Wrap the input tag with div tag -> attribute -> write: className="field"
- Just above the input tag, write a set of label tag with text of Image Search inside it.
- Test in UI. Now the input looks better with rounded corners etc.
- The input is stretch right across the page and need to be fixed in the App component.

**_My Blocker_**

I had a problem with the link to style and had to go to the Q&A for support and found a link that I've pasted into the href attribute and that worked [Semantic UI - CDN](9https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css)
This is the newest version of the semantic ui library and it worked for one of the other student so i gave it a go.

## App Component

To add some space to the left and right of the search bar.

- The div tag inside of the jsx, add attribute of className="ui container"
- Now, I have a more resonable width search bar.

**_Add some space above the search bar_**

- Add an attribute of style and value of an object -> margin top: '10px'
- This is manual (inline styling) but its ok for now as creating a whole css file just for this little styling is not worth it. In real life I would do external css rather than inline.
