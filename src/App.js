import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DatePicker from './pages/DatePicker';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Ranking from './pages/Ranking';
import Admin from './pages/Admin';
import BibleRange from './pages/BibleRange';
import NotFound from './pages/NotFound';
import Join from './pages/Join';
import { useState } from 'react';
import Loading from './pages/Loading';

export const ADMIN_PASSWORD = '1234';

function App() {
	const [loading, setLoading] = useState(false);

	return (
		<div className="App">
			{/* {loading ? (
				<Loading />
			) : ( */}
			<BrowserRouter>
				<Routes>
					<Route path="/loading" element={<Loading />} />
					<Route path="/" element={<Intro />} />
					<Route path="/join" element={<Join />} />
					<Route path="/login" element={<Login />} />
					<Route path="/datepicker" element={<DatePicker />} />
					<Route path="/overview" element={<Overview />} />
					<Route path="/ranking" element={<Ranking />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/biblerange" element={<BibleRange />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			{/* )} */}
		</div>
	);
}

export default App;
