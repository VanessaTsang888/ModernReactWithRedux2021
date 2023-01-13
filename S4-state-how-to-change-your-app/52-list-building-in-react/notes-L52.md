# 52 List Building in React

AnimalShow.js
Instead of writing Prop, we write object destructuring.

App.js
Import AnimalShow.js at the top.

Show a lists of different elements to user.

1. turn a string of an animal and magic transform into an instance of type="cat" inside of AnimallShow component. Do again for a different animal. We use JS build in func called `map()` that allows us to apply this kind of magic tranformation step to every element inside of any array.

2. In UI > click the btn > the string will print out on a different line. Yes, this works for me.

**_The map() func:_**

Map over an array of elements, and pass-in two elements:
`animals.map((animal, index))`

When we call it, we take every element out of the array. One by one we pass the string down into a transformation func - the entire element we pass into map() as our first func, so animal will be a string of cat. Then we work on cat - so transformation process it. Now do the same to the next animal. Once this is done to all elements, the entire map is going to return a brand new array

```js
[ <AnimalShow type="cat" /> <AnimalShow type="horse" /> ]

```

**_index_**
`key={index}`
This is a key of index is record keeping with React. React wants to be able to identify each individual element that you are returning inside of a list.
