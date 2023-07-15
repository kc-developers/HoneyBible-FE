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
import { dates } from './dates';
import DataRow from './DataRow';

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

	const dateHeaders = dates.map((date, i) => {
		const components = date.map((day) => {
			const m = i + 1 < 10 ? '0' + (i + 1) : i + 1;
			const d = day < 10 ? '0' + day : day;

			return (
				<TableCell key={`${m}_${d}`}>
					{m}/{d}
				</TableCell>
			);
		});

		return components;
	});

	return (
		<TableContainer>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell align="center">버튼</TableCell>
						<TableCell align="center">또래</TableCell>
						<TableCell align="center">이름</TableCell>
						<TableCell align="center">날짜수</TableCell>
						{dateHeaders}
					</TableRow>
				</TableHead>
				<TableBody>
					{examples.map((example) => {
						return (
							<DataRow key={`${example.age}_${example.name}`} data={example} />
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default DataTable;

export const examples = [
	{
		age: 98,
		name: '추희승',
		sum: 30,
	},
	{
		age: 97,
		name: '추희승',
		sum: 30,
	},
	{
		age: 88,
		name: '추희승',
		sum: 30,
	},
	{
		age: 988,
		name: '추희승',
		sum: 30,
	},
];
