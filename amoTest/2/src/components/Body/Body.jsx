import React from 'react'
import RightBanner from '../RightBanner/RightBanner'
import LeftBanner from '../LeftBanner/LeftBanner'
import classes from './Body.module.css'

const Body = () => {
	return (
		<div className={classes.container}>
			
			<LeftBanner/>
			<RightBanner/>
		</div>
	)
}

export default Body