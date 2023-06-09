import React from 'react';
import InputForms from '../components/admin/bibleRange/InputForms';
import Header from '../components/admin/Header';

function BibleRange() {
	return (
		<>
			<Header text={'통독범위 입력'} />
			<InputForms />
		</>
	);
}

export default BibleRange;
