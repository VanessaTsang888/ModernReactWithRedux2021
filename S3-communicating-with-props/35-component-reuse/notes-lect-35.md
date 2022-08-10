# Component Reuse

Develop approval card to give authors the ability to approve or reject user's comments.
We going to workout the best way to wrap wach of our comments with some additional little card and two buttons right underneath it.

**Approval Card**
The plan:

- Leave the CommentDetail component as it is.
- Develop a new component called: ApprovalCard and use this to give authors ability to either approve or reject a comment from a user.
- This card will include a white outline and x2 buttons and some custom content above the buttons.
- Will not hardcode it to always show an instance of CommentDetail as may be sometime in the future we may want to re-use this approval card component and have completly different content inside of it besides the CommentDetail component, e.g. the content can be a message saying: Are you sure you want to continue? Therefore, we don't want to 100% show the CommentDetail every single time we use this approval card.

**Next Lecture**

Talk about the feature around the prop system that we are going to use to be able to easily sub out the main content on the card itself.
