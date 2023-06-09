import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Intro.module.css';

function Intro() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/login');
	};

	return (
		<div className={styles.container}>
			<img className={styles.logo} src="./assets/honey.svg" alt="logo" />
			<div className={styles.textWrap}>
				<div className={styles.textBig}>
					<div>맑청하!!!!</div>
					<div>어서 오세요,</div>
					<div>
						<span className={styles.yellowText}>꿀성경</span>
						<span>입니다.</span>
					</div>
				</div>
				<div className={styles.textSmall}>맑은샘광천교회 청년부</div>
			</div>
			<button className={styles.tabButton} onClick={handleClick}>
				탭해서 시작하기
			</button>
		</div>
	);
}

export default Intro;
