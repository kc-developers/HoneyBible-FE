import React, { useState } from 'react';
import styled from 'styled-components';

function Form({ text, id, month, date, onUpdate }) {
	const [newInput, setNewInput] = useState(text);

	const handleChange = (e) => {
		setNewInput(e.target.value);
		onUpdate(id, e.target.value);
		// console.log(e.target.value);
	};

	return (
		<InputWrap>
			<DateSpan>
				{month}월 {date}일
			</DateSpan>
			<DateInput type="text" value={newInput} onChange={handleChange} />
		</InputWrap>
	);
}

export default Form;

const InputWrap = styled.div`
	margin-bottom: 0.5rem;
	margin-right: 0.2rem;
`;

const DateSpan = styled.span`
	font-size: 1.2rem;
`;

const DateInput = styled.input``;
