SECTION 3:
L29: Getting Some Free Styling:

Put together a single component, write out all of the different JSX we need inside there to make these 3 different comments all
in one go.

https://semantic-ui.com/

This is open source CSS framework. A simple css file with a little default styling.

On that web page go to: view -> Comments -> list of comments.

Install semantic ui. 

https://cdnjs.com/libraries/semantic-ui/0.16.0

https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.0/css/semantic.min.css

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

Continue from 3:35





