import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { options } from '../join/joinForm/options';

function LoginForm() {
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
		// 번호 뒷자리 4개인 경우만 true
		if (phone.length === 4) {
			setPhoneValid(true);
		} else {
			setPhoneValid(false);
		}
	};

	const handleSubmit = async (e) => {
		if (nameValid && ageValid && phoneValid) {
			e.preventDefault();

			console.log(name, age, phone);

			// ver 1
			const result = await axios({
				headers: { withCredentials: true, Accept: 'application/json' },
				method: 'POST',
				url: 'http://193.122.105.88:8080/', // url 수정
				data: {
					name: name,
					ttolae: age,
					phone: phone,
				},
			})
				.then((response) => {
					console.log(response);

					// token 값 받아와서 세션 스토리지에 저장
					// 어디서 토큰 받아오는지 알기 위해 출력
					console.log(response.headers.authorization, response.data.token);
					sessionStorage.setItem('token', response.data.token);
					sessionStorage.setItem('token', response.headers.authorization);

					alert('로그인에 성공했습니다.');
					navigate('/datepicker'); // 달력 화면으로 이동
				})
				.catch((err) => console.log(err));

			// ver 2
			/*
			axios
				.post('http://193.122.105.88:8080/', {
					headers: {
						widthCredentials: true,
						Accept: 'application/json',
					},
					data: {
						name: name,
						ttolae: age,
						phone: phone,
					},
				})
				.then((response) => {
					console.log(response);

					console.log(response.headers.authorization, response.data.token); 
					sessionStorage.setItem('token', response.data.token);
					sessionStorage.setItem('token', response.headers.authorization);

					alert('로그인에 성공했습니다.');
					navigate('/datepicker'); // 달력 화면으로 이동
				})
				.catch((err) => console.log(err));
			*/
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
					placeholder="전화번호 뒷자리 4개를 입력해 주세요"
					className={styles.input}
					value={phone}
					onChange={handlePhoneChange}
				/>
				{!phoneValid && (
					<div className={styles.message}>* 4자리만 입력해 주세요</div>
				)}
			</div>
			<div className={styles.buttonWrap}>
				<div className={styles.infoWrap}>
					<p className={styles.info}>아직 꿀성경 멤버가 아니신가요? |</p>
					<button className={styles.buttonRoute}>회원가입</button>
				</div>
				<button className={styles.buttonLogin}>로그인 하기</button>
			</div>
		</form>
	);
}

export default LoginForm;