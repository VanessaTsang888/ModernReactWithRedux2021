# 43 Events in Detail

We make use of Events anytime we want React to be notified about the user interacting with our app in some way such as user clicking, dragging, typing etc. Anytime we want to be notified about that kind of interaction we're always going to use the Event System. To make use of the Event System:

1. Decide what kind of event or interaction we want to watch for or detect? Clicking, double clicking, right-clicking, dragging, typing etc. What Event we looking for?

- The official React docs: https://reactjs.org/docs/events.html > SyntheticEvent.
- Supported Events > list (links) of the React supported events we can listen for.
- 90% of the time on App:

-> onclick > A user clicks on something.
-> onChange > A user types in a text input.

2. Write a func (which we've done with 'handleClick' arrow func in our animal app). This is usually called an event handler or a callback func. This will get called automatically sometime in the future/when user actually clicks on something or types into input field etc.

- event handler or callback func just tells Dev's that this will get called automatically by some piece of code sometime in the future from user interaction. Someone else is going to call it.

3. Name the func using pattern of **_handle + EventName_** Example, handleClick or handleMouseUp or handleScroll etc. These are community convention so we can call these callback func's anything we wish.

-> on + Button + Click
-> handle + Button + Click
etc.

4. Pass the func as a prop to a plain element such as a div, a button or a span etc. We can pass to custom components as well but for our animals app we just focus on plain elements.

5. Make sure you pass the func using a valid event name (choose from the list on the React official docs) such as 'onClick', 'onMouseOver' etc the naming convention must be exactly the same as on the list.

6. Make sure you pass a reference to the func but don't call it. This means inside the braces, write the func name but not a set of parenthises.

## Extra info

We can use the same event handler and listen for a totally different kind of event. Example, we want to listen for a mouse move event, we would change the name of this prop to `onMouseMove={...}`
and also change the name of the Event Handler within the callback func `const handleMouseMove = () => {...};`
Again, we can check this by inspecting the UI > Console tab: the data is here - see if its what we expect.
