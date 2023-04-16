import React from 'react';

function Form({ month, date }) {
	return (
		<div>
			<span>
				{month}월 {date}일
			</span>
			<input type="text" />
		</div>
	);
}

export default Form;
