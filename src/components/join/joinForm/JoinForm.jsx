import React, { useState } from 'react';
import styles from './JoinForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { options } from './options';

function JoinForm() {
	const [age, setAge] = useState(null);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [ageValid, setAgeValid] = useState(false); // 또래 유효성 검사 변수
	const [nameValid, setNameValid] = useState(false); // 이름 유효성 검사 변수
	const [phoneValid, setPhoneValid] = useState(false); // 전화번호 유효성 검사 변수

	const navigate = useNavigate();

	const handleNameChange = (e) => {
		setName(e.target.value);
		handleNameValid(e.target.value);
	};

	const handleNameValid = (name) => {
		// 이름 띄어쓰기 없고 세글자만 제대로 쓴 경우 true
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
		// 또래 선택한 경우 true
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
		// - 없이 문자열 길이가 11인 경우에 true
		if (!phone.includes('-') && phone.length === 11) {
			setPhoneValid(true);
		} else {
			setPhoneValid(false);
		}
	};

	const handleSubmit = async (e) => {
		// 버튼 클릭 시 통신하는 함수
		if (nameValid && ageValid && phoneValid) {
			e.preventDefault();

			console.log(name, age, phone);

			// ver 1
			const result = await axios({
				headers: {
					withCredentials: true,
					Accept: 'application/json',
				},
				method: 'POST',
				url: 'http://193.122.105.88:8080/', // url 수정 & https인지 확인
				data: {
					name: name, // api에 맞게 : 왼쪽 부분 이름 수정
					ttolae: age,
					phone: phone,
				},
			})
				.then((response) => {
					console.log(response);

					alert('회원가입이 완료되었습니다.'); // alert창 확인 후 로그인 화면으로 이동
					navigate('/login');
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

					alert('회원가입이 완료되었습니다.');
					navigate('/login');
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
					placeholder="전화번호를 - 없이 입력해 주세요"
					className={styles.input}
					value={phone}
					onChange={handlePhoneChange}
				/>
				{!phoneValid && (
					<div className={styles.message}>* '-' 없이 숫자만 입력해 주세요</div>
				)}
			</div>
			<button className={styles.buttonJoin}>회원가입 하기</button>
		</form>
	);
}

export default JoinForm;
