# 151 The useEffect Hook

The key to option 2 is making sure that we can run some code specifically when the term piece of state has changed and that is what we are going to use the useEffect hook for.

Funtion components do not naturally have access to lifecycle methods like class components do.

## What and how?

1. This hook allows function components to use something similar to lifecycle methods.
2. We configure the hook to run some code automatically in one of three scenarios.
3. There are 3 different ways we can congigure useEffect.

- When the component is rendered for the first time only.
- When component is rendered for the first time and whenever it rerenders.
- When the component is rendered for the first time and whenever it rerenders and some piece of data has changed.

We are going with scenario number 3 which is execute the code inside of the arrow function when the piece of state term changes.
