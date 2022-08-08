# Converting HTML to JSX:

Something that works well in html but not for JSX. [mdn textarea element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

On this page, search for: autofcous ->

"This Boolean attribut lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.".

The autofocus prop takes a Boolean value - true or false.

If we provide an attribute of autofocus, then whenever this text area is shown on a screen, it should be automatically focussed/selected (blue keyline around the input field) so user can start typing immediately when they come to a page. This is about an html attributes but we should be able to use all typical html with JSX as long as we do some editing to them.

```
// 4) Create a component
function App() {
  return <textarea autoFocus={true} />;
}


```

## Translate HTML attributes to JSX:

Nmes/values of attributes that you provide to elements in HTML are slightly different when writing JSX. This is how we translate/covert snippets of HTML to JSX:

1. All prop names follow the camelCase naming convention.
   Examples:

HTML -> Equivalent JSX:

Input fields:

```
 <input maxlength="5" />  ->  <input maxlength={5} />
```

Forms:

```
<form autocapitalize />  ->  <form autocapitalize />
```

2. number attributes use braces.
3. Boolean 'true' can be written with just the name. 'False' should be written with braces.
4. The 'class' attribute is written as 'className'.
5. In-line styles are provided as objects.
