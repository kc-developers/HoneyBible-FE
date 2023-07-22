import React from 'react';
import Form from './Form';
import styles from './InputForms.module.css';

export const dates = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function InputForms() {
	const setInputs = (date, index) => {
		let inputs = [];

		for (let j = 0; j < date; j++) {
			inputs.push(
				<Form key={`${index + 1}_${j + 1}`} month={index + 1} date={j + 1} />
			);
		}

		return inputs;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('클릭되었습니다.');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.flexWrap}>
				{dates.map((date, index) => (
					<div>{setInputs(date, index)}</div>
				))}
			</div>
			<button>저장 버튼</button>
		</form>
	);
}

export default InputForms;
