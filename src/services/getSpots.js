import axios from 'axios';

const getSpots = async ({data}) => {
	const spots = 'https://staging.spot2.mx/api/spots';
	const key = 'Bearer 15|ilOM0wmf0uOC6Fp3lNOVmDL1fR3xD9x7ZYImGmzj';
	const params = new URLSearchParams(data).toString();
	const url = `${spots}/?${params}`;

	return await axios.get(url,{
		headers:{
			'Authorization': key
		}
	})
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log(err);
			return [];
		});
};

export default getSpots;