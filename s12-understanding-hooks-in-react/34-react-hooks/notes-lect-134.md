# 134 React Hooks

**_The Hooks System_**

I had to miss out most of the previous sectins based on class based components using the state system and the lifecycle methods due to time limitations. I think I can still learn and understand the hook system ok.

## What is hooks about?

Its about giving functional components a lot of additional functionality. Hooks system allows us to make use of state and lifecycle methods etc. React gives us functions such as useState, useEffect and useRef. Each give additional functionality to a functional component.

1. useState: Funcion that lets you use state in a functional component -> setState.
2. useEffect: Funcion that lets you use something like lifecycle methods in a functional component.
3. useRef: Funcion that lets you create a 'ref' in a function component -> a particular element that is created by React.

Will learn what they do and how we make use of them.

Hooks are tools to help us write reusable code, instead of more classic techniques like Inheritance and OOP.

### Primitive Hooks

Within the hook system we have the primitive hooks which are ten functions included in React to give us more functionaly to function components. They each serve a very specific purpose.

Later will make use of some of these hooks to write our own custom hooks, e.g. useTranslate = useState + useEffect. So a custom hook reuse multiple primative hooks.
