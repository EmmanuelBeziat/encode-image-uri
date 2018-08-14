'use strict'

module.exports = (image) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = () => resolve(reader.result)
		reader.onerror = error => reject(error)
	})
}
