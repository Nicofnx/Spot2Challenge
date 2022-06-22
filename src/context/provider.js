import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const { Provider } = AppContext;

const StoreProvider = ({children}) => {

	const [store, setStore] = useState({
		type: null,
		term: null,
		square_space: null,
		url_params: ''
	});

	return (
		<Provider value={ [ store, setStore ] }>
			{ children }
		</Provider>  
	);
};

StoreProvider.propTypes = {
	children: PropTypes.node
};

export default StoreProvider;

