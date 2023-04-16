import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ModalContainer({ showModal }) {
	const navigate = useNavigate();

	const handleClick = (type) => {
		if (type === 'bibleRange') {
			navigate('/biblerange');
		} else if (type === 'checkData') {
			navigate('/admin');
		}
	};

	return (
		<ModalWrap>
			<ModalButton onClick={() => handleClick('checkData')}>
				데이터 확인
			</ModalButton>
			<ModalButton onClick={() => handleClick('bibleRange')}>
				통독범위 입력
			</ModalButton>
		</ModalWrap>
	);
}

export default ModalContainer;

const ModalWrap = styled.div``;

const ModalButton = styled.button`
	margin: 0.5rem;
	background-color: transparent;
	border: 1px solid black;
	border-radius: 2rem;
`;
