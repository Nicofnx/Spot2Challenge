import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LayoutContainer from './layoutContainer';

const MainContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	transition: opacity 0.3s;
	box-sizing: border-box;
	border-radius: 17px;
	overflow: hidden;

	${({ sending }) => sending && `
		opacity: 0.5
	`}
`;

const Main = ({children, sending }) => {
	

	return(
		<LayoutContainer>
			<MainContainer sending={ sending }>
				{ children }
			</MainContainer>
		</LayoutContainer>
	);
};



Main.propTypes = {
	children: PropTypes.node,
	sending: PropTypes.bool,
};

export default Main;