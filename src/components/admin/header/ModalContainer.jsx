import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ModalContainer.module.css';

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
		<div className={styles.modalWrap}>
			<button
				className={styles.button}
				onClick={() => handleClick('checkData')}
			>
				데이터 확인
			</button>
			<button
				className={styles.button}
				onClick={() => handleClick('bibleRange')}
			>
				통독범위 입력
			</button>
		</div>
	);
}

export default ModalContainer;
