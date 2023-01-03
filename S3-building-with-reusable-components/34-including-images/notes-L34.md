# 34 Including Images

Get images into our web app:

1. Go into our App.js file, at the top write out x3 different important statements (as if we are importing JS files).
2. For each image, write relative path from App.js file into the images directory and get the image.
3. Example:
4. One difference is that when we import a JS file we don't include the extension but for images we do.

```js
import AlexaImage from "./images/alexa.png";
```

Variables:
What is the variable within the import statement? To find out we can write a consol.log statement:

```js
console.log(AlexaImage);
console.log(SiriImage);
```

Inspect the UI -> Console tab: we have x2 separate console.log() one for alexa and one for siri. What are they?

1. Alexa.png is less than 9.7kb, gets inlined. siri.png is same size and gets treated as separate file.
2. If file is larger than 9.7kg then gets treated/served up as separate file by the development server. This is why we see 2 very different console.log's when we inspect the UI.
3. images: alexa and cortana is only 4kb but siri is 57kb. So alexa and cortana will be treated as inlined and siri as separate img.

Image Tag:
To how image from inside of our project. Write this tag to show image on the screen -> reference to an image.

```js
<img src={AlexaImage} />
```

Show image from external server:

```js
<img src="https://picsum.photos/200/300">
```
