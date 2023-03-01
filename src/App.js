import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DatePicker from './pages/DatePicker';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Ranking from './pages/Ranking';
import Admin from './pages/Admin';
import BibleRange from './pages/BibleRange';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Intro />} />
					<Route path="/" element={<Login />} />
					<Route path="/" element={<DatePicker />} />
					<Route path="/" element={<Overview />} />
					<Route path="/" element={<Ranking />} />
					<Route path="/" element={<Admin />} />
					<Route path="/" element={<BibleRange />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
