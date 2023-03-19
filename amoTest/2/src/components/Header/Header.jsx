import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import logoName from '../../assets/logoName.png'
import tg from '../../assets/tg.png'
import wtup from '../../assets/wtup.png'
import phone from '../../assets/phone.png'

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<img src={logo} alt={'logo'} className={classes.logoImg}/>
				<img src={logoName} alt={'WELBEX'} className={classes.logoImg}/>
				<p className={classes.slogan}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
			</div>
			<div className={classes.container}>
				<p>Услуги</p>
				<p>Виджеты</p>
				<p>Интеграции</p>
				<p>Кейсы</p>
				<p className={classes.sertification}>Сертификация</p>
			</div>
			<div className={classes.information}>
				<p>+7 555 555-55-55</p>
				<img src={tg} alt={'tg'}/>
				<img src={phone} alt={'phone'}/>
				<img src={wtup} alt={'WhatsUp'}/>
			</div>
		</header>
	)
}

export default Header