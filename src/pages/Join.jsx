import React from 'react';
import HeadTitle from '../components/join/headTitle/HeadTitle';
import InputForm from '../components/join/inputForm/InputForm';
import styles from './Join.module.css';

function Join() {
	return (
		<div className={styles.joinWrap}>
			<HeadTitle text={'회원가입'} />
			<InputForm type={'join'} />
		</div>
	);
}

export default Join;
