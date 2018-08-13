'use strict'

const mimes = {
	'png': 'image/png',
	'gif': 'image/gif',
	'jpg': 'image/jpeg',
	'jpeg': 'image/jpeg',
	'bm': 'image/bmp',
	'bmp': 'image/bmp',
	'webp': 'image/webp',
	'ico': 'image/x-icon',
	'svg': 'image/svg+xml'
}

module.exports = (url, callback) => {
	const canvas = document.createElement('canvas')
	const image = document.createElement('img')

	image.addEventListener('load', () => {
		const ctx = canvas.getContext('2d')
		const contentType = mimes[url.split('.').pop()] || 'image/jpeg'

		canvas.width = image.width
		canvas.height = image.height

		ctx.drawImage(image, 0, 0)
		callback(null, canvas.toDataURL(contentType))
	})

	image.addEventListener('error', () => {
		callback(new Error('Failed to load image'))
	})

	if (!canvas.getContext) {
		setTimeout(callback, 0, new Error('Canvas is not supported'))
	}
	else {
		image.setAttribute('crossOrigin', 'anonymous')
		image.src = url
	}
}
