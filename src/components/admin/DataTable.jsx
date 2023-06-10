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

	return <>DataTable</>;
}

export default DataTable;
