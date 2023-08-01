import React, { useState } from 'react';
import Form from './Form';
import styles from './InputForms.module.css';

export default function InputForms() {
	const [datas, setDatas] = useState(initialState);

	const setInputs = (date, index) => {
		let inputs = [];

		for (let j = 0; j < date; j++) {
			inputs.push(
				<Form
					key={`${index + 1}_${j + 1}`}
					id={`${index + 1}_${j + 1}`}
					text={datas[`${index + 1}_${j + 1}`]}
					month={index + 1}
					date={j + 1}
					onUpdate={handleUpdate}
				/>
			);
		}

		return inputs;
	};

	const handleUpdate = (k, v) => {
		setDatas((prev) => {
			return { ...prev, [k]: v };
		});

		console.log(datas);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('클릭되었습니다.');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.flexWrap}>
				{dates.map((date, index) => (
					<div key={`${date}_${index}`}>{setInputs(date, index)}</div>
				))}
			</div>
			<button>저장 버튼</button>
		</form>
	);
}

export const dates = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const initialState = () => {
	const dict = {};

	dates.map((date, index) => {
		for (let i = 0; i < date; i++) {
			dict[`${index + 1}_${i + 1}`] = 'O';
		}
		return dict;
	});

	return dict;
};
