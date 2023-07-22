import { TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';

function DataRow(data) {
	const { age, name, sum } = data.data;

	const [newData, setNewData] = useState({ age, name, sum });
	const [updated, setUpdated] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNewData({
			...newData,
			[name]: value,
		});
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		setUpdated(!updated);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('수정 완료');
	};

	const handleDelete = (e) => {
		e.preventDefault();
		console.log('삭제 클릭');
	};

	return (
		<TableRow>
			<TableCell>
				{updated ? (
					<button onClick={handleSubmit}>완료</button>
				) : (
					<button onClick={handleUpdate}>수정</button>
				)}
				<button onClick={handleDelete}>삭제</button>
			</TableCell>
			{updated ? (
				<>
					<TableCell>
						<input
							type="text"
							name="age"
							value={newData.age}
							onChange={handleChange}
						/>
					</TableCell>
					<TableCell>
						<input
							type="text"
							name="name"
							value={newData.name}
							onChange={handleChange}
						/>
					</TableCell>
					<TableCell>
						<input
							type="text"
							name="sum"
							value={newData.sum}
							onChange={handleChange}
						/>
					</TableCell>
				</>
			) : (
				<>
					<TableCell>{age}</TableCell>
					<TableCell>{name}</TableCell>
					<TableCell>{sum}</TableCell>
				</>
			)}
		</TableRow>
	);
}

export default DataRow;
