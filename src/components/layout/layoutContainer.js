import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
`;

const LayoutContainer = ({children}) => {
	

	return(
		<Container>
			{ children }
		</Container>
	);
};



LayoutContainer.propTypes = {
	children: PropTypes.node
};

export default LayoutContainer;