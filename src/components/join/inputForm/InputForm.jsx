import React, { useState } from 'react';
import styles from './InputForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InputForm({ type }) {
	const [age, setAge] = useState(null);
	const [name, setName] = useState('');
	const [ageValid, setAgeValid] = useState(false);
	const [nameValid, setNameValid] = useState(false);

	const navigate = useNavigate();

	const handleNameChange = (e) => {
		setName(e.target.value);
		handleNameValid(e.target.value);
	};

	const handleNameValid = (name) => {
		let pattern = /[a-zA-Z]/;

		if (name === '' || pattern.test(name)) {
			setNameValid(false);
		} else {
			setNameValid(true);
		}
	};

	const handleAgeChange = (e) => {
		setAge(e.target.value);
		handleAgeValid(e.target.value);
	};

	const handleAgeValid = (age) => {
		if (age === null || age === '') {
			setAgeValid(false);
		} else {
			setAgeValid(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (nameValid && ageValid) {
			if (type === 'join') {
				navigate('/login');
				// axios
				// 	.get('https://localhost:8080/api/admin')
				// 	.then((res) => {
				// 		setData((prev) => [res.data.data]);
				// 	})
				// 	.catch((err) => {
				// 		console.log(err);
				// 	});
				// const result = axios.push('https://localhost:8080/auth/join');
			} else {
				// type === 'login'
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.formWrap}>
			<div className={styles.inputWrap}>
				<input
					type="text"
					placeholder="이름을 입력해 주세요"
					className={styles.input}
					value={name}
					onChange={handleNameChange}
				/>
				{!nameValid && (
					<div className={styles.message}>*한글만 입력해 주세요</div>
				)}
			</div>
			<div className={styles.inputWrap}>
				<select
					name="select"
					id="select"
					className={styles.selectBox}
					onChange={handleAgeChange}
				>
					<option defaultValue hidden>
						또래를 선택해 주세요
					</option>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				{!ageValid && (
					<div className={styles.message}>*또래가 선택되지 않았습니다</div>
				)}
			</div>
			{type === 'join' && (
				<button className={styles.button}>회원가입 하기</button>
			)}
			{type === 'login' && (
				<>
					<div className={styles.infoWrap}>
						<p className={styles.info}>아직 꿀성경 멤버가 아니신가요? | </p>
						<p className={styles.info}> 회원가입</p>
					</div>
					<button className={styles.button}>로그인 하기</button>
				</>
			)}
		</form>
	);
}

export default InputForm;

const options = [
	{ value: '04', label: '04또래' },
	{ value: '03', label: '03또래' },
	{ value: '02', label: '02또래' },
	{ value: '01', label: '01또래' },
	{ value: '00', label: '00또래' },
	{ value: '99', label: '99또래' },
	{ value: '98', label: '98또래' },
	{ value: '97', label: '97또래' },
	{ value: '96', label: '96또래' },
	{ value: '95', label: '95또래' },
	{ value: '94', label: '94또래' },
	{ value: '93', label: '93또래' },
	{ value: '92', label: '92또래' },
	{ value: '91', label: '91또래' },
	{ value: '90', label: '90또래' },
	{ value: '89', label: '89또래' },
	{ value: '88', label: '88또래' },
	{ value: '87', label: '87또래' },
	{ value: '86', label: '86또래' },
	{ value: '85', label: '85또래' },
	{ value: '84', label: '84또래' },
	{ value: '83', label: '83또래' },
	{ value: '82', label: '82또래' },
];
