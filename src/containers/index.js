import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRaces } from '../store/actions/race'
import { RaceGroup } from '../components/RaceGroup'

const mapState = ({
	races
}) => ({
	races
})

const mapDispatch = (dispatch) => ({
	getAllRaces () {
		dispatch(getRaces())
	}
})

export class RacesContainer extends Component {
	constructor (props) {
		super(props)

		this.nextOpenFive = this.nextOpenFive.bind(this)
	}

	componentWillMount () {
		this.props.getAllRaces()
	}

	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
  	this.props.getAllRaces()
  }

  nextOpenFive (races) {
  	if (!races) return []

  	const isStillOpen = (race) => {
  		return Date.now() < Date.parse(race.raceStartTime)
  	}

  	return races.filter(isStillOpen).slice(0, 5)
  }

	render () {
		const races = this.props.races

		return (
			<div className='RacesContainer'>
				<RaceGroup type='R' races={this.nextOpenFive(races.racing)} />
				<RaceGroup type='G' races={this.nextOpenFive(races.greyhounds)} />
				<RaceGroup type='H' races={this.nextOpenFive(races.harness)} />
			</div>
		)
	} 
}

RacesContainer.propTypes = {
	races: React.PropTypes.object
}

RacesContainer.defaultProps = {
	races: {}
}

export default connect(mapState, mapDispatch)(RacesContainer)
