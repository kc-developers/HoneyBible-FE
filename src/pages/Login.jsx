import React from 'react';
import HeadTitle from '../components/join/headTitle/HeadTitle';
import styles from './Login.module.css';
import InputForm from '../components/join/inputForm/InputForm';

function Login() {
	return (
		<div className={styles.loginWrap}>
			<HeadTitle text={'로그인'} />
			<InputForm type={'login'} />
		</div>
	);
}

export default Login;
