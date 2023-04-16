import React from 'react';
import InputForms from '../components/bibleRange/InputForms';
import Header from '../components/Header';

function BibleRange() {
	return (
		<>
			<Header text={'통독범위 입력'} />
			<InputForms />
		</>
	);
}

export default BibleRange;
