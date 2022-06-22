import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AppContext } from '../context/provider';
import getSpots from '../services/getSpots';

const useGetSpots = () => {
	const [store, setStore] = useContext(AppContext);
	const params = useParams();
	const location = useLocation();
	const [sending, setSending] = useState(false);
	const [spots, setSpots ] = useState([]);

	useEffect(() => {

		const data = new URLSearchParams(location.search);		
		const type = data.get('type');
		const term = data.get('term');
		const square = data.get('square_space');

		setStore({
			type: parseInt(type),
			term: parseInt(term),
			square: parseInt(square),
			url_params: data
		});

		setSending(true);
		(async () => {
			const response  = await getSpots({data});
			console.log(response);
			setSending(false);
			setSpots(response?.data?.spots);
			
		})();

		

	}, [location]);

	return { sending, spots };
};

export default useGetSpots;