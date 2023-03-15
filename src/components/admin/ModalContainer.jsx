import React from 'react';
import styled from 'styled-components';

function ModalContainer({ showModal }) {
	return (
		<ModalWrap>
			<ModalButton>데이터 확인</ModalButton>
			<ModalButton>통독범위 입력</ModalButton>
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
