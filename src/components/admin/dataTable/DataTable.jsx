import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataTable() {
	/* data 받아오는 부분 .. 데이터 어떻게 짰는지 알아야 함!!
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('https://localhost:8080/api/admin')
			.then((res) => {
				setData((prev) => [res.data.data]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	*/

	return (
		<TableContainer>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell align="center">변경</TableCell>
						<TableCell align="center">또래</TableCell>
						<TableCell align="center">이름</TableCell>
						<TableCell align="center">날짜수</TableCell>
					</TableRow>
				</TableHead>
				<TableBody></TableBody>
			</Table>
		</TableContainer>
	);
}

export default DataTable;
