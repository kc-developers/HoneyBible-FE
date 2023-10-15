import React from 'react';
import { Modal, Paper } from '@mui/material';
import styles from './ModalCustom.module.css';

function ModalCustom({ isOpen, closeModal, children }) {
	return (
		<Modal open={isOpen} onClose={closeModal}>
			<Paper className={styles.paper} elevation={2}>
				{children}
			</Paper>
		</Modal>
	);
}

export default ModalCustom;
