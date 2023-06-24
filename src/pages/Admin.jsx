import DataTable from '../components/admin/dataTable/DataTable';
import Header from '../components/admin/header/Header';

function Admin() {
	return (
		<>
			<Header text={'관리자 페이지'} />
			<DataTable />
		</>
	);
}

export default Admin;
