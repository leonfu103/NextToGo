import React, { Component } from 'react'
import moment from 'moment'
import horseLogo from '../horse.png'
import dogLogo from '../dog.png'
import harnessLogo from '../harness.png'
import './style.css'

const logos = {
	'R': horseLogo,
	'G': dogLogo,
	'H': harnessLogo	
} 

export class Tag extends Component {
	constructor(props) {
		super(props)
		this.state = {
      date: new Date()
    }
	}

	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
  	const {
  		raceNumber,
  		raceStartTime,
  		meeting: {
  			raceType,
  			meetingName,
  			location
  		}
  	} = this.props.race

  	return (
  		<div className='RaceGroup__tag'>
				<p>{'R' + raceNumber}</p>
				<p>{moment(raceStartTime).fromNow()}</p>
				<p>
					<img className='Tag_image' src={logos[raceType]} alt='logo' />
					<span className='Tag_name'>{`${meetingName} (${location})`}</span>
				</p>
			</div>
		)
  }
}

Tag.propTypes = {
  race: React.PropTypes.object
}

Tag.defaultProps = {
  race: {}
}
