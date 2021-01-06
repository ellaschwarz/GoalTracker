// import logo from './logo.svg';
// import './App.css';

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import { GoalContext } from './contexts/GoalContext';

import Navbar from './components/NavbarComponent';
import Home from './pages/HomePage';
import Goal from './pages/GoalPage';

function App() {
	const [goalData, setGoalData] = useState(null);

	return (
		<>
			<GoalContext.Provider value={{ goalData, setGoalData }}>
				<Navbar />
				<Switch>
					<Route exact path='/home' component={Home}></Route>
					<Route exact path='/goal' component={Goal}></Route>
				</Switch>
			</GoalContext.Provider>
		</>
	);
}

export default App;
