import styled from 'styled-components';

export const GoalItemContainer = styled.div`
	overflow: auto;
	height: 20vh;
	width: 90%;
	padding: 1%;
	align-content: center;
	margin: auto;
	border-radius: 10px;
	border: 1px ${({ theme }) => theme.colors.lightGray};
	background-color: ${props => props.backgroundColor};
`;
