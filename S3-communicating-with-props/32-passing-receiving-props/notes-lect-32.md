# 32 Passing and Receiving Props

Props (properties):

- System for passing data from **parent** component to a **child** component.

- Goal is to customise or configure a child component.

Note:
A child cannot pass data back up to the parent directly. We can kind of do it indirectly - will see examples of that later. Generally, the prop system is about communicating from parent to child.

Two Stages of Props:

1. We provide info/data from parent to child.
2. The child consumers/makes use of that data.

Provide Data:

Looks like an attribute -> the property name, and then the value for that prop.

```
< CommentDetail autor= "Sam" />
```

Now that we've provided the data, we go to the CommentDetail to consumer that data.

The

```
console.log(props);
```

in the component function call:
-> in browser -> inspect -> Console tab: this will show x3 objects which are the x3 instances we created - child components.

Each props object has a key-value-pair inside it. The key is the name of the prop -> author. The value is the individual name we provided to each of those child components.
