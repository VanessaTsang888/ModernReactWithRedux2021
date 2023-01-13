# 50 Back to the App

Using an array to keep track on the animal we show.

Any time use clicks the Add Animal btn, we want to show an additional pic of an animal. User can add as many animals as they wish so we going to have a list of animals that will be picked at random and add into list ofan imals we want to display.

When app first starts up we going to display our App component, which will have a single piece of state called `'animal' state`. This is going to be an Array.

App Component
`'animal' state`
`['cow', 'bow']`

As user click the btn, we going to add additional animal to that array `['cow', 'bow']`

For every String we going to show a copy of the AnimalShow component. Each time we do this we customise it by passing down a Prop called: type > `{type: 'cow'}`.
So we using an array to keep track on the animal we show.

**_Note:_** We are not using the number counter approach here.
