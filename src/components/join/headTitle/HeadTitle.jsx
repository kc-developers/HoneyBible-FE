import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai';
import styles from './HeadTitle.module.css';
import { useNavigate } from 'react-router-dom';
import ModalCustom from '../modal/ModalCustom';
import { Box } from '@mui/material';

const PASSWORD = '1234';

function HeadTitle({ text }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleOpen = () => {
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	const handlePwChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password === PASSWORD) {
			navigate('/admin');
		} else {
			alert('비밀번호가 틀립니다.'); // 휴대폰 화면에 맞게 알림창 수정하기
		}
	};

	return (
		<div className={styles.wrapper}>
			<button
				className={`${styles.button} ${styles.back}`}
				onClick={() => navigate('/')}
			>
				<IoIosArrowBack />
			</button>
			<div className={styles.title}>{text}</div>
			<button
				className={`${styles.button} ${styles.setting}`}
				onClick={handleOpen}
			>
				<AiOutlineSetting />
			</button>
			<ModalCustom isOpen={modalOpen} closeModal={handleClose}>
				<Box>
					<form onSubmit={handleSubmit}>
						<div>관리자 비밀번호를 입력하세요.</div>
						<input type="password" value={password} onChange={handlePwChange} />
						<button>입력 완료</button>
					</form>
				</Box>
			</ModalCustom>
		</div>
	);
}

export default HeadTitle;
