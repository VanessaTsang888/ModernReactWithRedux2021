# When do we Search?

Now we need to add in some code to take the searched term that the user is entered and make a request off to the Wikipedia API.
Where we going to write that code to make that request? There are 2 possible options:

1. option searching 1:
   Add the code in the onChange event handler called. This would update the list. Then our component will rerender to show list of results.
   This aproach is very simple and straight forward but the downside is that everytime user make a keypress change the component will rerender which is OTT.
2. Option searching 2:
   After component has rerendered, inside of our component we can add in some code to detect our component is rerendering and that our term piece of state has changed. Then we can make request to API. Then sometime in future we get a response and update 'results' piece of state. Then our component will rerender again and show list of results on screen. This option we can easily extract that searching code from anything related to an onChange event.
   We would have 2 pieces of info that would need to trigger a search and for option 2 it would be easy to add in that additional parameter.
   So anytime our component rereders we need to add in some code to detect that we are rerendering and that the term piece of state has changed. This is where the useEffect hook comes in to allow us to impliment ths step -> run some additional code.

   useEffect hook to detect that the term piece of state has changed.
