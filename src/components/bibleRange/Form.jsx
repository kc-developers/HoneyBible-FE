import React from 'react';
import styled from 'styled-components';

function Form({ month, date }) {
	return (
		<InputWrap>
			<DateSpan>
				{month}월 {date}일
			</DateSpan>
			<DateInput type="text" />
		</InputWrap>
	);
}

export default Form;

const InputWrap = styled.div`
	/* display: flex; */
	margin-bottom: 0.5rem;
	margin-right: 0.2rem;
`;

const DateSpan = styled.span`
	font-size: 1.2rem;
`;

const DateInput = styled.input``;
