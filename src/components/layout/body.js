import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 0px;
	box-sizing: border-box;
	height: 100vh;
	overflow-y: auto;
	width: 100%;
	background: rgb(51,86,110);
	background: linear-gradient(338deg, rgba(51,86,110,1) 20%, rgba(30,30,31,1) 100%);

	-webkit-overflow-scrolling: touch;
	&::-webkit-scrollbar { width: 4px; border-radius: 10px; }
	&::-webkit-scrollbar-track { background: #fff; border-radius: 10px; }
	&::-webkit-scrollbar-thumb { border-radius: 10px; background: #7C98A7; }
	&::-webkit-scrollbar-thumb:hover { background: rgb(38,20,82); border-radius: 10px; }
`;

const Body = ({children}) => {
	

	return(
		<BodyContainer>
			{ children }
		</BodyContainer>
	);
};



Body.propTypes = {
	children: PropTypes.node,
	
};

export default Body;