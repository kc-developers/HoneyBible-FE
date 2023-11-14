import React from 'react';
import HeadTitle from '../components/join/headTitle/HeadTitle';
import JoinForm from '../components/join/joinForm/JoinForm';
import styles from './Join.module.css';

function Join() {
	return (
		<div className={styles.joinWrap}>
			<HeadTitle text={'회원가입'} />
			<JoinForm />
		</div>
	);
}

export default Join;
