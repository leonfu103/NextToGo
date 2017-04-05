import React from 'react'
import horseLogo from '../horse.png'
import dogLogo from '../dog.png'
import harnessLogo from '../harness.png'
import './style.css'

const headings = {
	'R': {
		text: 'Racing',
		logo: horseLogo
	},
	'G': {
		text: 'Greyhounds',
		logo: dogLogo
	},
	'H': {
		text: 'Harness',
		logo: harnessLogo	
	}
}

export const Heading = ({
	type
}) => {
	const heading = headings[type]

	return (
		<h1 className='RaceGroup__heading'>
			<img src={heading.logo} alt='logo' />
			<span>{heading.text}</span>
		</h1>
	)
}