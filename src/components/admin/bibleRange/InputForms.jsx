import React from 'react';
import Form from './Form';
import styled from 'styled-components';

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
		<FormContainer onSubmit={handleSubmit}>
			<FlexWrap>
				{dates.map((date, index) => (
					<MonthWrap>{setInputs(date, index)}</MonthWrap>
				))}
			</FlexWrap>
			<button>저장 버튼</button>
		</FormContainer>
	);
}

export default InputForms;

const FormContainer = styled.form``;

const FlexWrap = styled.div`
	width: 90%;
	height: 70vh;
	margin: 0 auto;
	overflow: scroll;
	display: flex;
`;

const MonthWrap = styled.div``;
