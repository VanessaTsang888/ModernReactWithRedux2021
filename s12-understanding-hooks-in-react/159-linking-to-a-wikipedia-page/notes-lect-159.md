# 159 Linking to a Wikipedia Page

Write a button for each result (on the list) for user to go to the corrisponding article.

To show a link to the right of every search result, inside of the div with the key of result.pageid -> add another div with className of right floated content, and add text of: Go. give the anhcer element of ui button.

**_Take user to a particular page_**
Make sure that the anchor element has a href property assigned to it. WRite a set of braces for templating and inside a set of back-ticks with url and string templating with pageid inside of it.

```js
<a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}}>Go</a>

```

## Next Up

At the moment app not very efficient and we need to restrict it to only Search with a Term. So wait for user to stop typing before our App do a search.
