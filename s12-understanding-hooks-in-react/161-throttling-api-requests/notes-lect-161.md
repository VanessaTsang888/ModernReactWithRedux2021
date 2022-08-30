# 161 - Throttling api requests

Make sure we don't do an api request every single time user changes text in the search input. Otherwise we would initiate a lot of requests more than we need and not efficient for the App.

We are going to let user type inside of input as much as they please as we not immediately do a search. Instead we going to wait for 500 ms for user to not do any additional input changes. So if they stop typing for 500ms then we will do one single search. This is the goal.

The idea
Whenever a user first types inside that input, we are going to set up a timer using the set timeout that is built into Javascript. In thay set timeout function, we are going to say in 500 seconds, go and run the search function with whatever the current term is thats going to occur at the very first keypress. If user then immediately presses another character, we are then going to cancel the previous timer. So go back, cancel that last search timer and set up a new timer to do a search in 500 ms. This will happen again when user do another search - do another search in another 500ms. This process will repeat over and over again until user goes for 500ms without typing anything in. At that point of time, we'll execute the last set timeout that was created.

## Next UP

We will set up this cascading timer in the next lecture.
