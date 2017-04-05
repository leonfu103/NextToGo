require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchRaces = () => {
	return fetch(
		'https://api.beta.tab.com.au/v1/tab-info-service/racing/next-to-go/races?jurisdiction=NSW'
	)
	.then(response => response.json())
	.then(result => {
		return result
	})
}
