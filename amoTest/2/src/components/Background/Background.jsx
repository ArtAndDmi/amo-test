import React from 'react'
import classes from './Background.module.css'

const Background = () => {
	return (
		<div>
			<div className={classes.yellowLight}></div>
			<div className={classes.purpleLight}/>
			<div className={classes.purpleBall}/>
			<div className={classes.redBall}/>
			<div className={classes.redLight}/>
			<div className={classes.smallRedBall}/>
		</div>
	)
}

export default Background