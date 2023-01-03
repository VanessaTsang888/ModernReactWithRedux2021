# 36 Review on how CSS Works

We have all our content we need in our web app and now can work on the styling.

How to apply styling inside of our React Project:

1. Use a CSS library:
   library: https://bulma.io/
   Its a collection of different css files that include a ton of free styling for our project. This will save us a lot of time and we are not trying to lern css but React.js.
2. Navigate to: left menu > Components > Card > example of a profile card. The code is on the right hand side.

3. Add Bulma:
   The class is: card and has collection of css rules.

```css
.card {
  ...;
}
```

The Content:

```html
<div className="card">
  <div className="card-image">...</div>
</div>
```

## Why to add CSS into our project

Write custom css or use a css library?

### CSS Library

Use external css/add-in css library.

1. Download the CSS file, add to the 'public' folder, add link tag to HTML file.
2. Download the CSS file, add to src folder, import it.
3. Add link tag to CSS file hosted on a CDN.
4. Install the CSS Library using NPM, import the CSS file.

### Write Custom CSS

We write our own css.

1. Write CSS into the a CSS file, place in 'public' folder, add link tag to index.html
2. Write css directly into index.html file.
3. Write css into a css file, place in 'src' folder, import the css file.
4. Write SASS, set up CRA to handle your SASS files, import SASS files.
5. Install a css-in-JS library. Write css in your JS file.
6. Add style tags to appropriate JSX element.

**\*NPM:\*\***
We going to use a command line tool to add in Bulma library into our project.
