import React from 'react'
import classes from './LeftBanner.module.css'

const LeftBanner = () => {
	return (
			<div className={classes.container}>
				<p className={classes.text}>Зарабатывайте больше</p>
				<p className={classes.gradientText}>c WELBEX</p>
				<p className={classes.description}>Развиваем и контролируем продажи за вас</p>
			</div>
	)
}

export default LeftBanner