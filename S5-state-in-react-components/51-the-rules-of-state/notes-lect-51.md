# Lecture 51 - The Rule of State

In last section we refactored our functional app component over to a class based one. Just refacturing will not resolve the problem. This video we introduct state in React - the system that will solve this problem that we're running into now.

**The Good News**
Using the state system will allow us to develop some interesting React Apps.

**The Bad News**
Traditionally working on state and learning how state works is a little challenging.

## The Rules of State System in React.Just

1. Only usable with class componeents (can be used with functional components using the 'hooks' system).
2. You will confuse props with state.
3. 'State' is a JS object that contains data relevant to a component.
4. Updating 'state' on a component causes the component to (almost) instantly rerender.
5. State must be initialise when a component is creted.
6. State can only be updated using the function 'setState'.

**My current commercial project**
In my current project of my full time job, we are not using class based components but functional components. Therefore, we are using the Hook System rather than state inside of class based components. Therefore, I'm moving on to the next section which is section 6 Understanding Lifecycle Methods.
