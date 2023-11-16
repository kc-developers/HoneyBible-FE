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
import { example } from './example';

function DataTable() {
	// const [datas, setDatas] = useState(example);
	const [datas, setDatas] = useState([]);

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

	useEffect(() => {
		axios
			.get('http://193.122.105.88:8080/user/all', {
				headers: {
					withCredentials: true,
					Accept: 'application/json',
				},
			})
			.then((res) => {
				console.log(res); // res.data.result
				setDatas((res) => [...example]);
			})
			.catch((err) => {
				console.log(err);
			});

		// setDatas(example);
		// console.log(datas);
	}, []);

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
					{datas.map((data) => {
						return <DataRow key={`${data.MEMBER_NUM}`} data={data} />;
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default DataTable;
