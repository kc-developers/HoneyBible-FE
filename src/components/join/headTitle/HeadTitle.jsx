import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai';
import styles from './HeadTitle.module.css';
import { useNavigate } from 'react-router-dom';

function HeadTitle({ text }) {
	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<button
				className={`${styles.button} ${styles.back}`}
				onClick={() => navigate('/')}
			>
				<IoIosArrowBack />
			</button>
			<div className={styles.title}>{text}</div>
			<button
				className={`${styles.button} ${styles.setting}`}
				onClick={() => navigate('/admin')}
			>
				<AiOutlineSetting />
			</button>
		</div>
	);
}

export default HeadTitle;
