import React, { useState } from 'react';
import styles from './Header.module.css';
import ModalContainer from './ModalContainer';

function Header({ text }) {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>{text}</div>
			<ModalContainer />
		</div>
	);
}

export default Header;
