import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Admissions from './components/Admissions';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';



function App() {
	return (
		<Router>
			<Header/>
			<Navbar />
			
			{/* <Login /> */}
			{/* <HomePage /> */}
			{/* <AboutUs /> */}
			<Admissions />
			{/* <Footer /> */}

		</Router>

	);
}

export default App;
