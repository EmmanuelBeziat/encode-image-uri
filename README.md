# encode-image-uri

Simple plugin to encode images to base64.

* Allow to select mimetype between `image/png` (by default), `image/jpeg`, or `image/gif`

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