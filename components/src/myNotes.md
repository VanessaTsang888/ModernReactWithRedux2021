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



