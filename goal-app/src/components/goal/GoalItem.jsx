import React from 'react';
import { GoalItemContainer } from './Goal.style';

export default function GoalItem(props) {
	const randomizeColors = () => {
		const colors = [
			'#EE5235',
			'#ED3C65',
			'#BC46CB',
			'#3096F7',
			'#6FF9DF',
			'#7E4BF6',
			'#7699E0',
			'#F07B83',
			'#EE5E80',
			'#4DB5E1',
			'#7D66E2',
			'#F5A861'
		];

		let randomColor = colors[Math.floor(Math.random() * colors.length)];

		return randomColor;
	};

	return (
		<>
			<GoalItemContainer backgroundColor={randomizeColors}>
				<p>{props.itemData.title}</p>
				<p>56%</p>
				<button>✓</button>
			</GoalItemContainer>
		</>
	);
}
