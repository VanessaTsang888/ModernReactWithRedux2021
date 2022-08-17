# 142 Setter Functions

Call the second element inside of a function:

When we call the useState() function or hook we receive an Array. The second element inside of it will always be our setter. To call it inside of our onTitleClick function, we simply call setActiveIndex and provide a new value as an argument.

What happens when we call the second element?
When user clicks the second index or the second title of the Accordion, which will call the second index that is the argument of the onTitleClick, the setActiveIndex() function that is inside will get called and we provide a value of 2. This will cause our component to re-render. Then the default value of null will disapear - not used anymore as that was just an initialisation value - as soon as we call our setter even one time we will not be using that default value anymore. Therefore, the second time we render this Accordion component, the value of activeIndex will be equal to whatever we provided to our setter function, in our case is two. So we would then execute the rest of our function with an active index equal to 2.
