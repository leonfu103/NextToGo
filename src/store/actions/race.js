import { RACES_RECEIVED } from '../constants'
import { fetchRaces } from '../../lib/api'

export const getRaces = () => {
	return (dispatch) => {
		return fetchRaces()
			.then(response => {
				dispatch({
					type: RACES_RECEIVED,
					races: response.races
				})
			})
	}
}
