import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Replace the text inside of the div with the list of comments:
// Use props to configure the CommentDetail JSX tags:
// The ApprovalCard component uses CSS from the semantic-ui website.
// This is a custom tag: <ApprovalCard></ApprovalCard>
// Now the CommentDetail is the Child component as its inside of the ApprovalCard element which is the parent component.
// The parent component we can provide as many elements as we wish or we can render a single component if we wish?

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45pm"
                    content="Nice blog post"
                    avatar={ faker.image.avatar() }
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="alex"
                    timeAgo="Today at 2:45pm"
                    content="I like the subject"
                    avatar={ faker.image.avatar() }
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 4:45pm"
                    content="I like the writing"
                    avatar={ faker.image.avatar() }
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));