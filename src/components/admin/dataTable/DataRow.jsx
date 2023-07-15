import { TableCell, TableRow } from '@mui/material';
import React from 'react';

function DataRow(data) {
	const { age, name, sum } = data.data;
	return (
		<TableRow>
			<TableCell>
				<button>수정</button>
				<button>삭제</button>
			</TableCell>
			<TableCell>{age}</TableCell>
			<TableCell>{name}</TableCell>
			<TableCell>{sum}</TableCell>
		</TableRow>
	);
}

export default DataRow;
