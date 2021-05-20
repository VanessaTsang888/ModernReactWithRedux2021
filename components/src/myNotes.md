SECTION 3:
L29: Getting Some Free Styling:

Put together a single component, write out all of the different JSX we need inside there to make these 3 different comments all
in one go.

https://semantic-ui.com/

This is open source CSS framework. A simple css file with a little default styling.

On that web page go to: view -> Comments -> list of comments.

Install semantic ui. 

https://cdnjs.com/libraries/semantic-ui/0.16.0
A public version that I can use in my project for free:
https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.0/css/semantic.min.css
Add this link to: public -> index.html -> head tag: write this code then past the link inside of the href double quotes:
<link rel="stylesheet" href="" />
Save the file.

To check if semantic.min.css has been installed:
Chrome -> Inspect -> Network -> CSS: first check-box is: semantic.min.css

L30 Naive Component Approach:

1. write the HTML code:
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Nice blog post</div>
                </div>
            </div>
        </div>
    );

L31 Specifying Images in JSX:
Component App continued...
Now refactor our HTML code into separate components.
We need an image for our app but instead of download img, save into our public directory, link to img tag inside of our app component.
Rather than going through all that trouble, we going to an open source library that help me auto generate lots of data to use inside of
my own personal project - fake data useful when I don't have actual data to work with:
https://github.com/marak/Faker.js/
API Methods -> all different types of data that we can generate with this module. We can make fake address, companies, images etc.
We going to make a fake avatar or profile image. To use this library: Terminal -> npm install --save faker
The --save is a flag and it means we want to save into our local project. Will create new entry inside of our package package.json file
and record the fact we installed this inside of our project. Every time I refresh the page the image will auto generated and a new img will
appear. If I get an broken img then just refresh the page and will get an new one.

L32 Duplicating a Single component:

Make reusable components by duplicating the comment div and refresh the screen. We need to refactor these 3 sets of code into separate components
and customise each of them - see next section.

L33 Extracting JSX to New Components:
To make reusable, configurable component.

1. Identify the JSX that appears to be duplicated.
2. What is the purpose of that block of JSX? Think of a descriptive name for what it does.
3. Create a new file to house this new component - it should have the same name as the component.
4. Make the new component configureable by using React's 'props' system.

The purpose of each JSX block is to display details about a single comment of a blog post.

L34 Component Nesting:
Show one component inside of another.
We want to render get the CommentDetail component inside of our app by making sure the CommentDetail component is available inside the index.js file:
Write export statement inside of CommentDetail.js file. This will make CommentDetail.js availabe to every other file inside of our project and to get
access to that we going to add an import statement to the index.js file to form an actual link between these 2 files. Inside the single quotes write
the relative path reference to the file that we are trying to import, which is in the same directory or same folder.

Tell the App fn to render the CommentDetail component: JSX tag:
            <CommentDetail />
Refresh browser to test out.

L35 React's Props System:
Component Hierarcy: child components.
We'll use the props system to customise the comment details when they render on the UI.

PROPS (properties):
System for passing data from a parent component to a child component (or a nested component). Goal is to customise or configure a child component.
Our App component will show instances of the CommentDetail, at sametime it will pass in a little bit of configuration (props) to each of those different
common components. Need to customise the date/time and the content as well.
The parent customise how the child looks or behaves.

L36 Passing and Receiving Props:
Passing data from a parent to a child.
A child cannot pass data back up to parent through the system directly (can kind of do it indirectly).

2 Stages:
1. Provide info from parent to child
2. The child consumes or makes use of that info.

Providing props info /props from parent to child:

<CommentDetail author= "Sam" />
When we provide a prompt to a component it's always going to be a unique version of that component.

Chrome -> inspect -> Console: 3 instances of the CommentDetail
Key is the author or name of the prop that we provided inside the app;
Value is the individual name that we provided to wach of those common details.
To consume this prop in Comment Detail.
The author property is inside of the props, take that author's name and put inside the anchor tag.

L37 Passing and Receiving Props:

Customise time and blog content trhough props system.

index.js -> JSX: CommentDetail -> key value pair:
Property name: timeAgo
Value: Today at 4:45pm

Reference a JS variable use this syntax:
{ props.timeAgo }

Task:
Pass Comment text from the parent and the image source from the parent as well.

L38 Passing Props - Solutions:
Pass basic info from a parent to a child:

        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45pm"
                content="Nice blog post"
            />

// render some content
{ props.content }

Extract the image url as well:
a reference to a JS variable: will generate a new link to an image and assign it to the Avator Prop that's going to be passed down to the comment detail:
The key is Avatar.
avatar={ faker.image.avatar() }

L39 Component Reuse:

Take each of the different comments and wrap in to an Approval Card. this is common for blog platforms. Due to spam posts, we can give authors the ability to audit them by approve or reject comments before they get added to an actual blog. Develop an ApprovalCard with 2 btn at the bottom.

Leave the CommentDetail.js as it is.
Create new file and call it: ApprovalCard.js -> not going to hard code it to always to show CommentDetail as we'll different content inside of it besides
the CommentDetail.

The props system we'll use to sub-out the main content itself.

L40 Implement an Approval Card:

create new file called ApprovalCard.js. Inside of that create new component called ApprovalCard

Borrow some styling from the semantic UI library so I don't need to worry about coding the CSS:
https://semantic-ui.com/views/card.html

left-bar -> scroll down and click Card -> Cards: A group of cards. This is what we want to build. click on the code icon < >
Copy the HTML. The main content will go inside this div tag:
<div className="content"></div>

Show the ApprovalCard component inside of the App: index.js
Inside of the App function -> inside of the: ui container comments div tag -> write this custom tag: <ApprovalCard />
At the top of the file, write this import statement:
import ApprovalCard from './ApprovalCard';

Done, see my screenshot.

L41 Showing Custom Children:
We don't want to hard code the ApprovalCard to 100% of the time to show the CommentDetail component as sometimes we want to show some
text instead. We going to make use of a little feature in the prop's system again.
The key and property inside of the CommentDetail tag we've used but there is another way we can communicate info into some child component.
We have ApprovalCard as a self-closing tag. Update this so its no longer a self-closing tag.
<ApprovalCard></ApprovalCard>
Communicate the CommentDeail down to the ApprovalCard and tell ApprovalCard we want to show the CommentDeail.
So we are taking the CommentDetail and passing it as a prop down into ApprovalCard. The CommentDetail is also a prop aswell as we are providing
some configs to the ApprovalCard.

Every function that we put together receives a first argument that we refer to as props.
When we do a console log on the props argument in the ApprovalCards function, and go to: Inspect -> Console: we see a props object has a
single property inside of it called children which is our CommentDetail component
This how we make reuseable components.

Challenge:
Take the ApprovalCard component from the index.js file and use it to both our other comment detals as well in the same file.

L42 Components Reuse:

I've wrapped the other  2 comment details with an ApprovalCard element.
We can now reuse the <ApprovalCard> component for any other purpose we want. Don't need to pass-in an React component
to this, we put in plain text or standard JSX as well. In addition we can render multiple elements inside of here.
The parent component we can provide as many elements as we wish or we can render a single component if we wish?


L43 Exercise - Props:

Completed and shown in the Exercises.js file.

It renders: Atention!
We did an update

I've checked my solution and its correct.

L44 Props Exercise - Solution:
I've made the Message component more useful using a set of braces. See Exercises.js file.

Code:
in the App component:
<Message header="Atention!" text="We did an update" />

In the Message component with props passed-in as an argument:

                <div className="header">{props.header}</div>
                <p>{props.text}</p>

Output:
Atention!
We did an update

L45 Exercise - Children:
Test Your Knowledge: Children Through Props:

Background:
UI: two segments using same CSS. The child is the first segment.

The Brief:
Take a look at the code below. The App is showing two separate groups of elements. Notice how there is one element that is giving both these
groups the nice grey background - it is the <div className="ui placeholder segment"><div>.

My Goal:
1. Create a new reusable compoenent called Segment that takes some child elements and shows them inside of a div with classNames of
 ui placeholder segment.
2. Refactor the App to use this new Segment component.

Hint:
Extract just the segment portion or just the thing that's giving us that styling into a separate component.
Code from line 5 - 11 into a new component. Render some children inside this new component. We reference props.children

Completed and shown in the Exercises.js file.

L46. Children Exercise Solution:

Completed and in separate file: Exercises.js

SECTION 4: Structuring Apps with Class-Based Components:

L47. Class-Based Components;

How React Used to Be:

Functional Components:
Can produce JSX to show content to the user.

Class Components:
Can produce JSX to show content to the user.
Can use the Lifecycle Method system to run code at specific points in time.
Can use the 'State' system to update content on the screen.

How React Is Now:
Now Functional Components has advanced overtime - the Hooks system.

Class Components:

1. Can produce JSX to show content to the user <-> Can produce JSX to show content to the user: Hooks System - Function Components.
2. Can use the Lifecycle Method system to run code at specific points in time <-> Can use Hooks to run code at specific points in time: Hooks System - Function Components.
3. Can use the 'state' system to update content on the screen <-> Can use Hooks to access state system and update content on screen: Hooks System - Function Components.

With this Hooks system the React team has given many more capabilities to function components and though the use of this system, function components can now execute code at specific points in time, which is quivalent to the lifecycle method system tied to class components. In addition function components
can make use of the state system. So today with React function components are similar to class components as they have similar capabilities.

Companies with established projects are using Class-based components.
Companies with newer project many be using Class-based or Function-based components.
I need to understand both class components and function components with the Hooks system. I have to know both different approaches.

Example: dashboard.stripe.com/test/dashboard
This React website only uses Functional Components and there are many of them.
I can filter via class-components: inspect -> Components: I can see there are many of them in-use.
So they still use both functional and class components. This proves to me that I need to understand both.

How To Learn:
Learn Class Components -> Learn Hooks -> Learn Redux.

L48. Class-Based Components:

Going to build an app that will help me understand how class based components work, how state works, how lifecycle methods work.
An app that is going to detect what season the user is currently experiencing outside in the real world.

If the user is location in the northen hemisphere that means we have actually, we have to detect our users physical location when they visit our app.
If our user are in the northen hemisphere and its between Oct and March then it's probably going to be winter. Then render to ui: Burr, it's chilly!
And show some snow flake icons.

If the user is located in the southern hemisphere when they are visiting our app and the month is between March and October, its winter for them too.
Then render to ui: Durr, it's chilly!

If our user are in the northen hemisphere and its between March and Oct then render: Let's hit the beach!
So essentially we're just detecting what season it is based on the user's locatio and their current month it is. Render different conent based on that.

App Challenges:
1. Need to get the users physical location
2. Need to determine the current month
3. Need to change text and styling based on location + month.

Somehow in the browser we need to detect what the users physical location is.
Somehow determin the current month -> JS has APIs that can determin current date and time and getting the month.
Change text and some styling on screen based on the location and the month combined together. 

Create new app use command: create-react-app seasons

L49 Scaffolding the App:

Change into the new seasons directory: cd seasons
Start up my development server inside there with: npm start
Now I see the default React app on my screen.
VSCode -> seasons project -> 






























