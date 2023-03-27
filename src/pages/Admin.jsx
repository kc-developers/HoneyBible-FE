import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DataTable from '../components/admin/DataTable';
import { TiThMenu } from 'react-icons/ti';
import ModalContainer from '../components/admin/ModalContainer';
import axios from 'axios';

function Admin(props) {
	const [showModal, setShowModal] = useState(false);
	const [theads, setTheads] = useState([]);
	const [datas, setDatas] = useState([]);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		axios
			.get('https://localhost:8080/api/admin')
			.then((res) => {
				setTheads([...res.data.dates]);
				setDatas([...res.data.datas]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Header>
				<MenuButton onClick={handleClick}>
					<TiThMenu />
				</MenuButton>

				<AdminTitle>관리자 페이지</AdminTitle>
			</Header>
			{showModal ? <ModalContainer showModal={showModal} /> : null}
			<DataTable theads={theads} datas={datas} />
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
