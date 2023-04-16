import React from 'react';
import Form from './Form';

export const dates = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function InputForms() {
	const setInputs = () => {
		let inputs = [];

		for (let i = 0; i < dates.length; i++) {
			for (let j = 0; j < dates[i]; j++) {
				inputs.push(
					<Form key={`${i + 1}_${j + 1}`} month={i + 1} date={j + 1} />
				);
			}
		}

		return inputs;
	};

	return (
		<form>
			{setInputs()}
			<button>저장 버튼</button>
		</form>
	);
}

export default InputForms;
