import './App.css';
import HomePage from './Pages/Homepage/HomePage'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'
import Team from './Pages/Team/Team';
import Infrastructure from './Pages/Infrastructure/Infrastructure'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admissions from './Pages/AdmissionPage/Admissions';



function App() {
	return (
		<>

			<Router>

				<Header />
				<Navbar />

				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route exact path='/home' element={<HomePage />} />
					<Route exact path='/about' element={<AboutUs />} />
					<Route exact path='/about/team' element={<Team />} />
					<Route exact path='/admission' element={<Admissions />} />
					<Route exact path='/infrastructure' element={<Infrastructure />} />
				</Routes>

				<Footer/>


			</Router>

		</>
	);
}

export default App;
