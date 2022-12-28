# Applying Styling in JSX:

Converting HTML attributes into JSX, continued...
Moving on to rule number 2 of 5.

## Translate HTML attributes to JSX:

Nmes/values of attributes that you provide to elements in HTML are slightly different when writing JSX. This is how we translate/covert snippets of HTML to JSX:

1. All prop names follow the lower camel-cased naming convention.
   Examples:

### HTML to Equivalent JSX:

Input field element and naming converention of elements:

```js
// html attribute -> provide Number as a String.
 <input maxlength="5" />
// React Prop/JSX -> pass a Number inside braces instead of as a String.
// Use lower camel-cased naming convention. Otherwise will get error when we inspect the UI -> Console tab.
 <input maxLength={5} />
```

Forms element:

```js
// html attribute
<form autocapitalize />
// JSX react Prop naming convention
<form autoCapitalize />
```

2. number attributes use braces.
   In the html there are some attributes we provide numbers to, e.g. an input takes a max length attribute that needs to be a number, but when we specify a number in html attribute we provide it as a String. In JSX, we use braces to enclose the value. If we don't then we'll get a consol log warning in browser.

```js
// html attribute
 <input maxlength="5" />
 // React Prop
  <input maxLength={5} />
```

3. Boolean 'true' can be written with just the prop name. 'False' should be written with braces.
   In JSX, when we provide a Boolean of ture to a prop, we can just write out the prop name by itself. But for Boolean of false, we do need to write false. This Prop works in FireFox but not in Chrome as I found out when testing in the UI.

```js
// html
< input spellcheck="true" />
// React Prop
<input spellCheck />
// Same as writing this. Now works in Chrome - with the red underline feature.
<input spellCheck={true}/>
// False will not give us the red underline when we make a typo.
<input spellCheck={false}/>

```

4. The 'class' attribute is written as 'className'.
   In html was assign a class to any given element. Classes are used to help with styling using css. For JSX we don't use class but className (with cap 'N') -> again lower cameral-cased naming convention.

```js
// from this..
<div class="divider" />
// To this...
<div className="divider" />
// From this..
<li class="item" />
// To this...
<li className="item" />
```

5. In-line styles are provided as objects.
   Anytime we want to provide style to an element in HTML we provide a style attribute and then list off individual styling rules. In JSX, we don't provide styles as strings but as Objects. So we use the style prop, use a set of braces and put our object with all our styling rules in there. We use cameral-cased instead of dashes/kababe case to write our property names.

```html
<!-- Provide styles to an element in plain html -->
<a style="text-decoration: 'none'; padding-top: '5px';"></a>
```

```js
// In JSX we provide styles as Objects NOT as Strings.
<div style={{ textDecoration: "none", paddingTop: "5px" }} />
```

I have tested in the UI on Chrome browser but the blue border not working in Chrome. However, FireFox works when i click inside the input field.
