import React, { useEffect } from 'react';
import {
	Table,
	Header,
	HeaderRow,
	Body,
	Row,
	HeaderCell,
	Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';

function DataTable({ theads, datas }) {
	const theme = useTheme({
		HeaderRow: `
			background-color: #eaf5fd;
		`,
		Row: `
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        }
      `,
	});

	useEffect(() => {
		console.log(theads);
		console.log(datas);
	}, [theads, datas]);

	return (
		<></>
		// 	<Table data={datas} theme={theme}>
		// 		<Header>
		// 			<HeaderRow>
		// 				{/* {theads.map((thead) => (
		// 					<HeaderCell>{thead}</HeaderCell>
		// 				))} */}
		// 			</HeaderRow>
		// 		</Header>
		// 	</Table>
	);
}

export default DataTable;
