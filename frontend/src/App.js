import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage/HomePage'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
	return (
		<>

			<Router>

				<Header />
				<Navbar />

				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route exact path='/home' element={<HomePage />} />
				</Routes>

				<Footer/>


			</Router>

		</>
	);
}

export default App;
