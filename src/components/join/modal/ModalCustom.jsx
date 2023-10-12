import React from 'react';
import { Modal, Paper } from '@mui/material';

function ModalCustom({ isOpen, closeModal, children }) {
	return (
		<Modal open={isOpen} onClose={closeModal}>
			<Paper
				elevation={2}
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '80%',
					height: '40%',
					maxWidth: '100%',
					maxHeight: '90%',
					overflowY: 'auto',
				}}
			>
				{children}
			</Paper>
		</Modal>
	);
}

export default ModalCustom;
