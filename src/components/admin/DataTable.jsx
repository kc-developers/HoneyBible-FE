import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core';

function DataTable({ theads, tbodys }) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>버튼</TableCell>
						<TableCell>또래</TableCell>
						<TableCell>이름</TableCell>
						<TableCell>날짜수</TableCell>
						{theads[0].map((thead) => (
							<TableCell key={thead}>{thead}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{/* {console.log('tbodys : ', tbodys)} */}
					{/* {tbodys.map(({ id, age, name, dateNum, datas }) => (
						<TableRow key={id}>
							<TableCell>button</TableCell>
							<TableCell>{age}</TableCell>
							<TableCell>{name}</TableCell>
							<TableCell>{dateNum}</TableCell>
							{datas.map(({ id, value }) => (
								<TableCell key={id}>{value}</TableCell>
							))}
						</TableRow>
					))} */}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default DataTable;
