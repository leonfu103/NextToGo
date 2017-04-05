import { combineReducers } from 'redux'
import raceReducer from './race-reducer'

export default combineReducers({
	races: raceReducer
})