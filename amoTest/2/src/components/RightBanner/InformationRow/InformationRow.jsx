import React from 'react'
import InformationBlock from '../InformationBlock/InformationBlock'
import classes from './InformationRow.module.css'

const InformationRow = ({blocks}) => {
	return (
		<div className={classes.container}>
			{blocks.map(({ title, body }) => <InformationBlock title={title} body={body}/>)}
		</div>
	)
}

export default InformationRow