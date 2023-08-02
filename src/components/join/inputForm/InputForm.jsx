import React, { useState } from 'react';
import styles from './InputForm.module.css';
import Select from 'react-select';

function InputForm({ type }) {
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

	const [age, setAge] = useState(null);
	const [name, setName] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleAgeChange = (e) => {
		setAge(e.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(name, age);
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
			</div>
			<div className={styles.inputWrap}>
				<Select
					placeholder={'또래를 선택해 주세요'}
					options={options}
					onChange={handleAgeChange}
					className={styles.selectBox}
				/>
			</div>
			{type === 'join' && (
				<button className={styles.button}>회원가입 하기</button>
			)}
			{type === 'login' && (
				<>
					<button className={styles.button}>로그인 하기</button>
				</>
			)}
		</form>
	);
}

export default InputForm;
