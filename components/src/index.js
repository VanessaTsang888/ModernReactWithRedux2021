import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// Replace the text inside of the div with the list of comments:
// Use props to configure the CommentDetail JSX tags:
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="alex" />
            <CommentDetail author="Jane" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));