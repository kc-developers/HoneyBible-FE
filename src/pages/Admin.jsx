import React, { useState } from 'react';
import styled from 'styled-components';
import DataTable from '../components/admin/DataTable';
import { TiThMenu } from 'react-icons/ti';
import ModalContainer from '../components/admin/ModalContainer';

function Admin(props) {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<div>
			<Header>
				<MenuButton onClick={handleClick}>
					<TiThMenu />
				</MenuButton>
				{showModal ? <ModalContainer showModal={showModal} /> : null}
				<AdminTitle>관리자 페이지</AdminTitle>
			</Header>
			<DataTable />
		</div>
	);
}

export default Admin;

const Header = styled.header`
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
