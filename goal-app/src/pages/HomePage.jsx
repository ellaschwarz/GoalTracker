import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoalContext } from '../contexts/GoalContext';
import axios from 'axios';

import GoalItem from '../components/goal/GoalItem';

export default function HomePage() {
	const { goalData, setGoalData } = useContext(GoalContext);

	const getGoals = () => {
		axios
			.get('http://localhost:5000/goals/')
			.then(res => {
				setGoalData(res.data);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		getGoals();
	}, []);

	return (
		<>
			<div>
				<p>This is home page</p>
			</div>

			{goalData &&
				goalData.reverse().map((goalItem, index) => {
					return <GoalItem key={index} itemData={goalItem} />;
				})}
		</>
	);
}
