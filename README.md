# encode-image-uri

Simple plugin to encode images to base64, with a mimetype conservation (jpg, png, gif, etc).

## Installation

```bash
# npm
$ npm i encode-image-uri

# yarn
$ yarn add encode-image-uri
```

## How to use

```javascript
const encodeImageURI = require('encode-image-uri')

encodeImageURI(image)
	.then(base64 => {
		console.log(base64)
		// Do your stuff
	})
	.catch(error => {
		console.error(error)
		// Handle your error
	})
```

Note that the image fiven must be a File object.

## Example

### Image from an input with multiple files

```html
<input type="file" class="input-file" multiple>
```

```javascript
documment.querySelector('.input-file').addEventListener(event, (event) => {
	const fileList = event.target.files

	Array.from(fileList).forEach(image => {
		encodeImageURI(image).then(base64 => {
			console.log(base64)
		})
	})
})
```

## Contribute

I’ll happily get your PR :)