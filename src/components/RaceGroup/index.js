import React from 'react'
import { Heading } from './Heading'
import { Tag } from './Tag'
import './style.css'

export const RaceGroup = ({
	type, 
	races
}) => {
	if (!races) return null

	const raceTags = races.map((race, index) => {
		return <Tag race={race} key={index} />
	})

	return (
		<div className='RaceGroup'>
			<Heading type={type} />
			{ raceTags }
		</div>
	)
}