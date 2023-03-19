import React from 'react'
import classes from './Footer.module.css'
import tg from '../../assets/tg.png'
import wtup from '../../assets/wtup.png'
import phone from '../../assets/phone.png'

const Footer = () => {
	return (
		<div className={classes.background}>
			<footer className={classes.footer}>
				<div className={classes.column}>
					<p className={classes.title}>о компании</p>
					<p className={classes.text} style={{ 'width': '25rem' }}>Партнерская
						программа</p>
					<p className={classes.text}>Вакансии</p>
				</div>
				{window.innerWidth >= 400 ?
					<div className={classes.container}>
						<div className={classes.column}>
							<p className={classes.title}>Меню</p>
							<p className={classes.text}>Расчёт стоимости</p>
							<p className={classes.text}>Услуги</p>
							<p className={classes.text}>Виджеты</p>
							<p className={classes.text}>Интеграция</p>
							<p className={classes.text}>Наши клиенты</p>
						</div>
						<div className={classes.column}>
							<p className={classes.title}></p>
							<p className={classes.text}>Кейсы</p>
							<p className={classes.text}>Благодарственные письма</p>
							<p className={classes.text}>Сертификаты</p>
							<p className={classes.text}>Блог на Youtube</p>
							<p className={classes.text}>Вопрос / Ответ</p>
						</div>
					</div>
					:
					<div className={classes.container}>
						<div className={classes.column}>
							<p className={classes.title}>Меню</p>
							<p className={classes.text}>Расчёт стоимости</p>
							<p className={classes.text}>Услуги</p>
							<p className={classes.text}>Виджеты</p>
							<p className={classes.text}>Интеграция</p>
							<p className={classes.text}>Наши клиенты</p>
						</div>
						<div className={classes.column}>
							<p className={classes.title}></p>
							<p className={classes.text}>Благодарственные письма</p>
							<p className={classes.text}>Кейсы</p>
							<p className={classes.text}>Сертификаты</p>
							<p className={classes.text}>Блог на Youtube</p>
							<p className={classes.text}>Вопрос / Ответ</p>
						</div>
					</div>
					
				}
				
				<div className={classes.columnContacts}>
					<p className={classes.title}>контакты</p>
					<p className={classes.phoneNumber}>+7 555 555-55-55</p>
					<div>
						<img src={tg} alt={'Tg'} className={classes.img}/>
						<img src={phone} alt={'Phone'} className={classes.img}/>
						<img src={wtup} alt={'WhatsUp'} className={classes.img}/>
					</div>
					<p className={classes.text}>Москва, Путевой проезд 3с1, к 902</p>
					<div className={classes.licence}>
						<p>©WELBEX 2022. Все права защищены.</p>
						<p className={classes.privacyPolicy}>Политика конфиденциальности</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer