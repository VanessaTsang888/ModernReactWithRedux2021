# 156 List Building

Take the results and build out a list to show inside of our jsx.

- Above the return statement write a new variable called renderedResults which will be the result of doing a:

```js
results.map((result) => {});
```

So take a look at every kind of result that we got back and build out a list out of them. Inside of this map statement return a div with className of item.
Print out the title of the article we've fetched
The summary of article is the snippet. Print this as well.

Within the second return statement, after the closing div with className ui form, print out display renderedResults as this variable has the results which is all data of the list in it.

## Test in the UI

There are some HTML that we don't want.

To fix the error we have in the consol tab within UI when we inspect it, we write a key proper to each of the results. In the UI -> Network -> Preview: in the response we get back, we have a: pageid: xxxx
We can use this pageid as the key prop as its consistent and unique.

I had to install axios again: npm i axios

## Next Up

Now fix the HTML stuff -> remove it.
