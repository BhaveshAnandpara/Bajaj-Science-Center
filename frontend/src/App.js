import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Homepage/HomePage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={ <HomePage/> } />
			</Routes>
		</Router>

	);
}

export default App;
