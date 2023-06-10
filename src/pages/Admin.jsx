import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../components/admin/DataTable';
import Header from '../components/admin/Header';

function Admin() {
	const [theads, setTheads] = useState([]);
	const [datas, setDatas] = useState([]);

	// 데이터 불러오는 부분을 DataTable로 옮기고 싶다
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
			<DataTable />
		</>
	);
}

export default Admin;
