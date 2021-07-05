Section 7: Handling User Input with Forms and Events:

78. App Overview :
User events: user clicking on something, typing something or dragging something around on the screen. How to deal with user events.

Stuff to Still Figure Out:
How to deal with user events?

1. How do we get feedback from the user?

2. How do we fetch data from some outside API or server?

3. How do we show lists of records?

Topics:
User events, fetching data and showing lists

The App: Search Photos
V1 Implementation:
Show a text input at the top of screen for user to type-in some text and press Enter. That will do a search or a request to an outside API that is going to find images or basically just simple pics that match whatever term that user just entered and return that to the screen/UI. Not much styling just handling user input, showing list of data, handling searching for images.

V2 Implementation:
Phase 01: do same as V1 but how we show these images to the user rather than just list them?
Tile the images across the screen (columns & rows) as images can be of different sizes so we need to tile them to line them up nicely using CSS style - intergrate React with non React code.

Generate new app to house our code for this project:
    npm install -g create-react-app  
    create-react-app reactproject 
    or combine both together: npx create-react-app reactproject  

I used the command as per instructor but no luck. Researched in Google and found this:
    create-react-app reactproject  
    or use: npx
Resource: https://www.javatpoint.com/react-create-react-app

I had to use these commands:
    sudo -i
        npm install -g create-react-app
            create-react-app photos


79. Component Design;

Start up my photos app:

I followed the last lecture to create new React App and this lecture I tried to run it but no luck. The Solution:
From the QA within this course, I found a solution:

I had to uninstall the app then install again using:
Uninstll:
    $ npm uninstall -g create-react-app
Install:
    $ npx create-react-app pic
Then:
    $ cd pics
    $ npm start

Resource: 
https://create-react-app.dev/docs/getting-started/

STUFF TO STILL FIGURE OUT:
1. How to get feedback from user?
2. How to fetch data/records from some outside API or server?
3. How to show lists of records?

CHALLENGES:
Need to get a search term from user;
Need to use that search term to make a request to an outside API and fetch data;
Take the fetched images and show/render/display them oL80n the screen in a list.

V1 Implementation:
Break down into separate components (see lectures diagram):
1. The App Component is going to be in the root of my application. Will show an instance of the SearchBar and an instance of the ImageList components.
2. SearchBar: responsible for showing a text input at the top of the screen.
3. ImageList: will take a list of images and render them out as a list on the screen.

80. Adding Some Project Structure:

Project folder -> src -> delete all files.

Created the index.js file within src directory.
Create components directory inside src.
Created the App.js files inside of component directory.



