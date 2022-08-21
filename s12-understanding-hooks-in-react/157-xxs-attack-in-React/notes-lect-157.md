# 157 XXS Attack in React

Remove the span tags that we can see when we run the App to test in the UI.

To create html element with React is by writing out some jsx as we've done when we write a component. In this case we have a string we want to turn in to jsx. To do this we need to use a little hidden feature in React.

Inside of the renderedResults function -> after div with className of header: write a span with prop of dangerouslySetInnerHTML -> pass in an object of: \_\_html -> assigned to it: result.snippet
Then delete the existing: {result.snippet}
Now in the UI we don't see those span tags anymore, but when we inspect the page -> Elements, we see the span create out of the html string we had previously. Now this is actually a html element.

We are using a long prop name to create object we assign a strange looking key of \_\_html
Anytime we take a string, which we are from a 3rd party - Wikipedia API, we could be introducing a security hole into your App, specifically a type of security hole called XXS Attack (cross-site scripting attack). This is where we accidentally pick up and render some html from an untrused source that can allow some hacker to execute some JS insdie of our App. Since we can't trust Wikipedia API, this is a possible attack someone could make on our App if we. Since this is for training purposes only, we can use this solution.

## Solution to using dangerouslySetInnerHTML

In the Q&A section of this lecture Bobby the Teaching Assistant suggested to use a sanitizer library like DOMPurify

There are multiple ways to handle unsafe input if dangerouslySetInnerHTML is not an option. Use a sanitizer library like DOMPurify (which is what I would highly recommend), or, a less sophisticated approach to use a regex and simply filter and remove all the HTML based on your pattern. The big difference with a sanitizer like DOMPurify is that it is going to remove only the dangerous HTML and leave the safe HTML alone.

I would recommend reading this security-focused article on the topic which discusses each solution and the pros and cons:

[Preventing XSS in React (Part 2): dangerouslySetInnerHTML](https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part2.html)
