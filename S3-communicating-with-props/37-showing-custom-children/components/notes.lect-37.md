# 37 Showing Custom Children

In the last video we created the approval card component and then we showed it inside of our app. Now we want to show the CommentDetail component inside of it without hardocding it to always 100% of the show CommentDetail as if we do so we loose some re-usability around the approval card. This is how we are going to do this.

- Make use of a little feature in the props system again.
- So far we only used props as something we pass directly to a component inside of the component tag, e.g. <CommentDetail author="Alex" /> but there is another way we can communicate info into some child component. This is how:

1. Make the self closing component tag to be not a self closing tag: <ApprovalCard></ApprovalCard> This is same as how we write a set of div tag.
2. Now to tell the approval card to show the comment detail, we cut the closing tag of the approval card and past on the other side of the comment detail self closing tag: <ApprovalCard><CommentDetail author="Alex"/></ApprovalCard>
3. Now the comment detail is a prop as well as we are providing some config to the approval card component.
4. Since we are passing the comment detail info into the
5. In the ApprovalCard function pass in props as the first argument as this has the config of CommentDetail.
6. In the ApprovalCard component, replace the text: Are you sure with: {props.children}
   So the child component the CommentDetail will show up inside of the ApprovalCard.
7. Tested and works as expected. See my screen shot.
