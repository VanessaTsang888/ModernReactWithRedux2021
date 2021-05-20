# Blog Posts Web Application

Getting Started with Create React App. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

This Blog Posts web application is created uses the JavaScript library React.js

In this application there is some components that generates some blog posts. Each blog post has an image, the users name in bold, the time which the comment was posted and the the conent (comment text).

Each blog gives the author the ability to approve or reject a comment from a user - auditing.

To customise how content gets rendered  to the screen (UI) and to customise how the user interactions with this web app, I used the three concepts of commponents within the React Ecosystem

**Components Nesting (Props System):**

This is how we can nest components inside of each other, i.e. passing data from parent component to a child component. Then I can configure and customise the child component to how it should look or behave.

**Components Reusability:**

I want to. make components that can easkily be reused through out this app. Therefore, I created the ApprovalCard component as the parent component so that I can reuse this component which takes in a child component i.e. the CommentDetail component. My child component can also take just some plain text or standard JSX as don't have to be a React component.

**Components Configuration:**

I create my components so that they can be configures it to cumtomise each card to take a different type of content. This is why you see the first card contains just some plain text and the other cards contains a React Component which is the child componet: 

```
<CommentDetail />
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How To Use This App - Instructions

Once the App has started, you are presented with a web page that contains four different blog posts. Each post has two buttons for the author to audit the user's comment which is common in blog posts today.

The first post contains a heading and some plain text. The other posts uses the React component called ApprovalCard (the parent) that contains a child component called CommentDetail.

### Frameworks, libraries and tools:

For this App I had used the JavaScript library called React.js. 

For the CSS styling of the comments, I used some default styling from an open source CSS Framework:
 https://semantic-ui.com/views/comment.html

Then to get this for free, I used the below link within the header tag inside of the index.html file that is located in the public directory/folder:
https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.0/css/semantic.min.css

For the CSS styling of the Approval Card, I used some default styling fromm an open source CSS framework:
https://semantic-ui.com/views/card.html

For the profile images, i used a some fake data from an open source library: https://github.com/marak/Faker.js/

To use the avatar image API Method, I used this command in your Terminal: 

```
npm install --save faker
```

Then inside of the index.js file i had written an import statement to be able to use this library of fake and open source data.



