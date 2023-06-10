import React, { useState } from 'react';
import styles from './Header.module.css';
import { TiThMenu } from 'react-icons/ti';
import ModalContainer from './ModalContainer';

function Header({ text }) {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>{text}</div>
			<div>
				<button className={styles.button} onClick={handleClick}>
					<TiThMenu />
				</button>
				{showModal ? <ModalContainer showModal={showModal} /> : null}
			</div>
		</div>
	);
}

export default Header;
