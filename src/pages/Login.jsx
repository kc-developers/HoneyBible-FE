import React from 'react';
import HeadTitle from '../components/join/headTitle/HeadTitle';
import styles from './Login.module.css';
import LoginForm from '../components/login/LoginForm';

function Login() {
	return (
		<div className={styles.loginWrap}>
			<HeadTitle text={'로그인'} />
			<LoginForm />
		</div>
	);
}

export default Login;
