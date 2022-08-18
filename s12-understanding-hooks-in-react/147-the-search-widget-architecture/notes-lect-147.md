# 147 The Search Widget Architecture

**_The Goal_**
The goal of this search widget is to show a little text input where a user can type in some topic. Then we are going to take that search term do a search of at the Wikipedia API and then show some result immediately underneath it -> will show the title of the article and the summary of that article immediately after it.

## Understanding the API

First we need to understand the API itself then workout some architecture to put this search component and list component together.

**_How to use the Wikipedia API_**
This don't require any authentication, any API keys or anything like this.
Wwe need to make a git request to a URL. At the very end there is a query parameter called SR Search. Then say whatever we want to search for. Whatever user types into the search input will override the current search term. So if user types 'programming' then the Wikipedia API url will look something like this:

en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming

**_Returned Data_**

The data we get back is a simple JSON file and the code looks like Javascript objects.
Chrome has extension that will auto format JSON files. In this respons we get back, there is a query property.
For every search result we have a title, a page ID and most importantly a snippet which is a headline of the article.

1. Take user input and make a request.
2. Do a map() over the results.
3. Show the results over the screen.

**_Diagram_**

We will use hooks to implement this widget.

The Search Component:
In this search App, we going to build everything inside one single search component. Will be displayed by the App, not going to take any props from the app.
Will be 100% self contained.
Will have 2 pieces of state, the term and the results. So the users search term will get sent to the Wikipedia API which will return some results and we going to store those results on some piece of state. As soon as user change that results piece of state our component will render and we should render that list of results onto the screen and show to the user.
