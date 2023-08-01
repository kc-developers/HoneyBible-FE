import React from 'react';
import styles from './Header.module.css';
import Buttons from './Buttons';

function Header({ text }) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{text}</div>
			<Buttons />
		</div>
	);
}

export default Header;
