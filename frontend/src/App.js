import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header'
// import HomePage from './components/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs'
import Admission from './Pages/AdmissionPage/Admissions'
import Footer from './Components/Footer/Footer'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Pages/LoginPage/Login'


function App() {
	return (
		<Router>
			<Header/>
			<Navbar />
			
			{/* <Login /> */}
			{/* <HomePage /> */}
			{/* <AboutUs /> */}
			{/* <Admission /> */}
			<Footer />

		</Router>

	);
}

export default App;
