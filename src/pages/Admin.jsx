import DataTable from '../components/admin/DataTable';
import Header from '../components/admin/Header';

function Admin() {
	return (
		<>
			<Header text={'관리자 페이지'} />
			<DataTable />
		</>
	);
}

export default Admin;
