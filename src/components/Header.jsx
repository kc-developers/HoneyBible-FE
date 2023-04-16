import React, { useState } from 'react';
import styled from 'styled-components';
import { TiThMenu } from 'react-icons/ti';
import ModalContainer from './admin/ModalContainer';

function Header({ text }) {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<HeaderWrap>
				<MenuButton onClick={handleClick}>
					<TiThMenu />
				</MenuButton>
				<AdminTitle>{text}</AdminTitle>
			</HeaderWrap>
			{showModal ? <ModalContainer showModal={showModal} /> : null}
		</>
	);
}

export default Header;

const HeaderWrap = styled.div`
	width: 100%;
	padding: 1rem 0;
	display: flex;
	align-items: center;
	background-color: #14b560;
`;

const MenuButton = styled.button`
	border: none;
	background-color: transparent;
	align-items: center;
	font-size: 2.4rem;

	:hover {
		transition: all ease 0.1s;
		transform: scale(1.02);
	}
`;

const AdminTitle = styled.div`
	margin: 0 auto;
	align-items: center;
	font-size: 2rem;
`;
