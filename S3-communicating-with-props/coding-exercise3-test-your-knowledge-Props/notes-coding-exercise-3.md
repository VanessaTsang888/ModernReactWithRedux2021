# Coding Exercise 3: Test Your Knowledge: Props

**The Instructions**

Check out the code below. Right now it contains two components: the App and the Message . The code works, but notice that the Message component has a hard-coded header of Changes in Service and hard-coded message of We just updated... .

As it stands, the Message component can't be reused to show any other message!

Your goal:

Refactor the Message component so that it receives its props from the parent component (the App).

The Message should receive a prop of header and text

The Message should show the header prop inside of the div with className header and the text prop inside of the paragraph tag.
