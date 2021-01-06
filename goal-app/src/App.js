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
