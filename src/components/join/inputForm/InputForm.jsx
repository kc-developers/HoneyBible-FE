import React, { useState } from 'react';
import styles from './InputForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { options } from './options';

function InputForm({ type }) {
	const [age, setAge] = useState(null);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [ageValid, setAgeValid] = useState(false);
	const [nameValid, setNameValid] = useState(false);
	const [phoneValid, setPhoneValid] = useState(false);

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

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
		handlePhoneValid(e.target.value);
	};

	const handlePhoneValid = (phone) => {
		// - 없이 문자열 길이가 11인 경우에만 true로 변경
		if (!phone.includes('-') && phone.length === 11) {
			setPhoneValid(true);
		} else {
			setPhoneValid(false);
		}
	};

	const handleSubmit = async (e) => {
		if (nameValid && ageValid) {
			e.preventDefault();

			if (type === 'join') {
				console.log(name, age);

				const result = await axios({
					headers: {},
					method: 'POST',
					url: 'https://localhost:8080/auth/join', // url 수정
					data: {
						name: name,
						age: age,
					},
				})
					.then((res) => {
						console.log(res);
					})
					.catch((err) => console.log(err));

				alert('회원가입이 완료되었습니다.');
				navigate('/login');
			} else {
				// type === 'login'
				console.log(name, age);

				const result = await axios({
					headers: {},
					method: 'POST',
					url: 'https://localhost:8080/auth/login', // url 수정
					data: {
						name: name,
						age: age,
					},
				}).then((res) => {
					console.log(res);
					// localStorage에 토큰 저장하거나 할 일 추가하기

					alert('로그인에 성공했습니다.');
					navigate('/datepicker');
				});
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
					<div className={styles.message}>* 한글만 입력해 주세요</div>
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
					<div className={styles.message}>* 또래가 선택되지 않았습니다</div>
				)}
			</div>
			<div>
				<input
					type="tel"
					placeholder="전화번호를 - 없이 입력해 주세요"
					className={styles.input}
					value={phone}
					onChange={handlePhoneChange}
				/>
				{!phoneValid && (
					<div className={styles.message}>* '-' 없이 숫자만 입력해 주세요</div>
				)}
			</div>
			{type === 'join' && (
				<button className={styles.buttonJoin}>회원가입 하기</button>
			)}
			{type === 'login' && (
				<div className={styles.buttonWrap}>
					<div className={styles.infoWrap}>
						<p className={styles.info}>아직 꿀성경 멤버가 아니신가요? |</p>
						<button className={styles.buttonRoute}>회원가입</button>
					</div>
					<button className={styles.buttonLogin}>로그인 하기</button>
				</div>
			)}
		</form>
	);
}

export default InputForm;
