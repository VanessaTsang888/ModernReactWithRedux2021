# 38 Component Reuse

Part 2 of lecture 37: I have wrapped the remaining x2 CommentDetail component tag
with Approval Card component tag. Now the approval card has the comment detail showing inside it.

I feel that CommentDetail is now the grandchild and the ApprovalCard is still the child of App in this index.js file.

After testing in the UI, I can see that all three comments are now being rendered inside of an instance of approval card. Basically, I've set up ApprovalCard to take some child in (use for anyother purpose I want) and that is how I can reuse the ApprovalCard component for all three comments that has different data that uses same styling.

Inside ApprovalCard we don't have to pass in a React component. We can put in plain text or standard jsx as well. Tested in the UI -> Now a new card is returned at the top.

Also multiple elements can be wrapped by the ApprovalCard component tag, e.g. I can wrap the plain text a <div> tag, and inside that a <h4> with plain text:

```
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
```

This will work ONLY if we make sure we reference { props.children } in the ApprovalCard component.
