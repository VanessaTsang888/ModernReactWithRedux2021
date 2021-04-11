import React from 'react';
import faker from 'faker';

// A new component:
// fn to server as the comment detailed component:
// Make the new component configureable by using React's 'props' system.
// Prop will show inside of an object that is provided as the first argument to this fn.
const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
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
    );
};

// Make this component to the rest of our project:
export default CommentDetail;