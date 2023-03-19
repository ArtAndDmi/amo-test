import React from 'react'
import classes from './InformationBlock.module.css'

const InformationBlock = ({ title, body }) => {
	return (
		<div className={classes.block}>
		{window.innerWidth >= 400 ?
					<div>
					<p className={classes.title}>{title}</p>
					<p className={classes.body}>{body}</p>
					</div>
				:
			<div className={classes.container}>
				<p className={classes.gradient}>{}</p>
				<p className={classes.title}>{title}</p>
			
			</div>
		}
		</div>
	
	)
}

export default InformationBlock