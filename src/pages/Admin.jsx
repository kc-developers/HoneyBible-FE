import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../components/admin/DataTable';
import Header from '../components/Header';

function Admin() {
	const [theads, setTheads] = useState([]);
	const [datas, setDatas] = useState([]);

	useEffect(() => {
		axios
			.get('https://localhost:8080/api/admin')
			.then((res) => {
				setTheads((prev) => [res.data.dates]);
				setDatas((prev) => [res.data.datas]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Header text={'관리자 페이지'} />
			<DataTable theads={theads} tbodys={datas} />
		</>
	);
}

export default Admin;
