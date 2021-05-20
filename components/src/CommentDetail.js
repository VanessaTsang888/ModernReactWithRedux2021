import React from 'react';

// A new component:
// fn to server as the comment detailed component:
// Make the new component configureable by using React's 'props' system.
// Prop will show inside of an object that is provided as the first argument to this fn.
// And will contain some Key Value Pairs
const CommentDetail = props => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
            <a href="/" className="author">
                { props.author } 
            </a>
            <div className="metadata">
                <span className="date">{ props.timeAgo }</span>
            </div>
            <div className="text">{ props.content }</div>
        </div>
    </div>
    );
};

// Make this component to the rest of our project:
export default CommentDetail;