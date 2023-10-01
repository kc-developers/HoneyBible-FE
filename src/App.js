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

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
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
		</div>
	);
}

export default App;
