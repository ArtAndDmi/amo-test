import React from 'react'
import classes from './RightBanner.module.css'
import InformationRow from './InformationRow/InformationRow'

const RightBanner = () => {
	
	const blocks = [
		{
			title: 'ВИДЖЕТЫ',
			body: '30 готовых решений'
		},
		{
			title: 'DASHBOARD',
			body: 'с показателями вашего бизнеса'
		},
		{
			title: 'SKYPE АУДИТ',
			body: 'отдела продаж и CRM системы'
		},
		{
			title: '35 ДНЕЙ',
			body: 'использования CRM'
		},
	]
	
	const ROW_LENGTH = 2
	const chunks = []
	
	blocks.forEach((item) => {
		if (!chunks.length || chunks[chunks.length - 1].length === ROW_LENGTH)
			chunks.push([])
		
		chunks[chunks.length - 1].push(item)
	})
	
	
	return (
		<div className={classes.container}>
			<p className={classes.text}>Вместе с <span className={classes.gradient}>бесплатной консультацией</span> мы дарим:</p>
			{chunks.map(item => <InformationRow blocks={item}/>)}
			<button className={classes.button}>Получить Консультацию</button>
		</div>
	)
}

export default RightBanner