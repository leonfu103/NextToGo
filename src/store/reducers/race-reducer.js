import { RACES_RECEIVED } from '../constants'

const ByRaceType = (type) => {
	return (race) => {
		return race.meeting.raceType === type
	}
}

export default (state = {}, action) => {
	switch (action.type) {
		case RACES_RECEIVED:
			const races = action.races
			return {
				racing: races.filter(ByRaceType('R')),
				greyhounds: races.filter(ByRaceType('G')),
				harness: races.filter(ByRaceType('H'))
			}
		default:
			return state
	}
}
