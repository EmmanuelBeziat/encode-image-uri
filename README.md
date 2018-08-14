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

encodeImageURI('path/to/image', (error, uri) => {
	if (!error) {
		// Do stuff
		console.log(uri)
	}
	else {
		// Handle error
		console.error(error)
	}
})
```
