# 35 Handling image Accessibility

We have imported x3 images. Now we going to pass them down as props into our 3 separate ProfileCard's within App() func -> App.js file.

Prop Name:
We call our prop: image={...}
We going to pass down a prop/data that is a JS variable. An attribut that is a expression or variable, we have to wrap it with braces.

```js
image = { AlexaImage };
```

## Make use of images

Do this in ProfileCard.js file -> add in the additional prop we are now passing down, within the object we passed into the ProfileCard func. Now that we are receving the image, we can create an image element inside of our component and just display the image.

```js
<ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
```

image element must have alt text for accessibility -> error msg: Line 15:7: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.

alt prop is for screen reader that text to audio for users with poor eyesight.
The title attribute is a tool-tip and this is also for accessibility.

```js
<img src={image} alt="pda logo" title="pda logo" />
```
