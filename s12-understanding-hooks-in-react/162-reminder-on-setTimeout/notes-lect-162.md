# 162 Reminder on SetTimeout

Write code to just set up the time to do a search in 500ms and not worry about the cancelling action.
We write the new code in/around the if-statement where we user the search.

Some point in time in the future, we can attempt to clear our time out making use of the clear timeout function. All we need to do is pass in the id of: timeoutId. How we going to get this Id and cancel it the next time a user type something in? Create a new piece of state and keep track of that? But its better to make use of the useEffect hook.
This is step 1.

## Another feature of the useEffect hook

Next lecture we talk about another feature of the useEffect hook.
