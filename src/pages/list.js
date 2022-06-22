import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { AppContext } from '../context/provider';
import Body from '../components/layout/body';
import Main from '../components/layout/main';
import Filters from '../components/filters/filters';
import SpotTitle from '../images/spot-title.png';
import LayoutContainer from '../components/layout/layoutContainer';
import { ImageTitle, Logo, Header, Text } from './list.styles';
import useGetSpots from '../hooks/useGetSpots';
import Modal from '../components/modal/modals';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const List = () => {
	const [store, setStore] = useContext(AppContext);
	const history = useHistory();
	const location = useLocation();
	const { sending, spots } = useGetSpots();
	const mapRef = useRef();
	const [markers, setMarkers] = useState([]);
	const [selectedMarker, setSelectedMarker] = useState([]);
	const [stateModal, setStateModal] = useState(false);
	const [map, setMap] = React.useState(null);

	const modal = ({marker})=>{				
		setSelectedMarker(marker);	
		setStateModal(!stateModal);			
	};
	
	const positionMaps= (map) => {
		const bounds = new google.maps.LatLngBounds();
		markers.map((marker, i)=>{
			const position = new google.maps.LatLng(parseInt(marker.lat), parseInt(marker.lng));
			bounds.extend(position);
			
		});
		map.fitBounds(bounds);
	};	
	

	const onLoad = React.useCallback(function callback(map) {		
		positionMaps(map);
		setMap(map);		
	}, []);


	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);	

	const keyGoogle = process.env.REACT_APP_KEYGOOGLEMAP;
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: keyGoogle,	
	  });
	  


	  const getMarkers = () => {
		let todos = [];
		{ markers.map((marker, i)=>{
			todos = [...todos, <Marker key={i} position={{ lat: marker.lat, lng: marker.lng }} title={marker.spotName} onClick={()=>{modal({marker});}} /> ];
			
		});
		};
		return todos;
	};


	  useEffect(()=>{
		setMarkers(setSpotMarkers(spots));
	},[spots]);


	  function setSpotMarkers(spots) {
		
		return spots.map((spot, i)=>{
			return {lat: spot.latitude,
				lng: spot.longitude, 
				spotName: spot.name,
				spotSquare: spot.square_space,
				spotDescription: spot.description || 'Whitout description for this spot'
			} ;
		});
	}

	function onSetFilter({name, value}) {
		const params = new URLSearchParams(location.search);

		if(value.toString() === params.get(name)){
			params.delete(name);
		} else {
			params.set(name, value);
		}
		history.push({search: params.toString()});
	}

	/* function onDeleteFilter({name, value}) {
		const params = new URLSearchParams(location.search);
		params.delete(name, value);
		history.push({search: params.toString()});
	} */
	



	return(
		<Body>
			<LayoutContainer>
				<Header>
					<Logo>
						<Link to='/'><ImageTitle src={ SpotTitle }/></Link>
					</Logo>
					<Filters 
						onSetFilter={ onSetFilter }
						//onDeleteFilter={ onDeleteFilter }
					/>
				</Header>
			</LayoutContainer>
			<Main>				
				{ isLoaded ? 
					<div style={{ height: 'calc(100vh - 111px)', width: '100%' }} > 
						<GoogleMap
							zoom={12}
							onLoad={onLoad}
							onUnmount={onUnmount}
							//ref={mapRef}
							mapContainerStyle={{ height: 'calc(100vh - 111px)', width: '100%' }}
							center={{ lat: 19.435646, lng: -99.200398 }}
						>
							{getMarkers()}
						</GoogleMap>
					</div>
					:<></>
				}
				
				
			</Main>
			<Modal
				stateOn={ stateModal }
				stateOff={ setStateModal }
				title={selectedMarker.spotName}
				description={selectedMarker.spotDescription}
				spotSquare = {selectedMarker.spotSquare}

			>					
			</Modal>
		</Body>
	);
};


export default List;
