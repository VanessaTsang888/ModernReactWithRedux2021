# Executing the Request from useEffect

Update the axios url to a real url to the Wikipeda website.

[wikipedia website](https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming)

The vast majority of that is a queary string (the part after the php), we don't encode that to the url argument of our request. Past the url without the queary string inside of the axios.get() method.

For the second argument, provid a 'params' property and assign it an object. Axios will take the key-pair-values and code them into a query string and append on to the end of the url automatically.

Take the above key-value-piars and write them into that parmas object.

## Testing in the UI

Test this in our Network Request Log (when we Inspect the UI) to make sure that we are making the Request successfully.

Inspect -> Network tab -> XHR -> here the initial request has already been issued as when we first render our component to the screen our useEffect function is going to be invoked - this always happens with useEffect even with Array as the second param.
We are going to se an additional Reques made for every single keypress.

## Next Up

In the next video...
Take the response, extract the data out of it, and then assign that or use it to update some new piece of state inside of our component. That will casue our component to rerender. Then we can build a list out of that list of results.
