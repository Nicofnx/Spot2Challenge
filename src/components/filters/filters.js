import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../context/provider';
import { Filter, Home} from 'react-feather';
import { FiltersContainer, Wrapper, Shadow, Button, Tags, Content, Location, Options, Title } from './filters.styles';
import LayoutContainer from '../layout/layoutContainer';


const SPOT_TYPE_OPTIONS = [
	{ label: 'Street Spot', id: 1 },
	{ label: 'In mall Spot', id: 2 },
	{ label: 'In mall island', id: 3 },
	{ label: 'Other', id: 4 }
];

const SPOT_TERM_OPTIONS = [
	{ label: 'Short Term', id: 1 },
	{ label: 'Long Term', id: 2 },
	{ label: 'Both', id: 3 },
	
];

const SPOT_SQUARE_OPTIONS = [
	{ label: 'Small Square', id: 1 },
	{ label: 'Medium Square', id: 2 },
	{ label: 'Large Square', id: 3 },	
	
];

const Filters = ({onSetFilter}) => {	

	const [opened, setOpened] = useState(false);
	const [store] = useContext(AppContext);


	function toggleFilters() {
		setOpened(!opened);
	}

	function setFilterParams({name, value}) {
		if(onSetFilter) onSetFilter({name, value});
	}



	/* function onlyNumbers(e) {
		var key = e.keyCode || e.which;
		if ( key === 110 || key === 190 || key === 188 ) {     
			e.preventDefault();     
		}
	} */

	return(
		<>
			<Button full={ true } selected={ opened } onClick={ ()=>{ toggleFilters(); } }>
				<Filter/>{ 'Filters' }
			</Button>

			<FiltersContainer>
				<Shadow opened={ opened } onClick={()=>{ toggleFilters();}}/>
				<Content opened={ opened } >
					<LayoutContainer>
						<Wrapper>
							<Location>
								<Title>{ 'Select Type' }</Title>
								<Options>
									{ SPOT_TYPE_OPTIONS.map((type, i)=>{
										return (
											<Tags key={i} selected={ store.type === type.id } onClick={ ()=>{ setFilterParams({name: 'type', value: type.id}); } }>
												{ type.label }
											</Tags>
										);
									}) }
								</Options>
							</Location>
							<Location>
								<Title>{ 'Select Term' }</Title>
								<Options>
									{ SPOT_TERM_OPTIONS.map((term, i)=>{
										return (
											<Tags key={i} selected={ store.term === term.id } onClick={ ()=>{ setFilterParams({name: 'term', value: term.id}); } }>
												<Home/>{ term.label }
											</Tags>
										);
									}) }
								</Options>
							</Location>

							<Location>
								<Title>{ 'Select Term' }</Title>
								<Options>
									{ SPOT_SQUARE_OPTIONS.map((square, i)=>{
										return (
											<Tags key={i} selected={ store.square === square.id } onClick={ ()=>{ setFilterParams({name: 'square_space', value: square.id}); } }>
												<Home/>{ square.label }
											</Tags>
										);
									}) }
								</Options>
							</Location>

							{/* <Location>
								<Title>{ 'Select Term' }</Title>
								<Input type={ 'number' }
									defaultValue={ store.square_space?.toString() }
									placeholder={ 'Enter m2' }
									onKeyDown={ (e)=>{ onlyNumbers(e); } }
									onBlur={ (e)=>{ setFilterParams({name: 'square_space', value: e.target.value.toString()}); } }
								/>
							</Location> */}
						</Wrapper>
					</LayoutContainer>
				</Content>
			</FiltersContainer>
		</>
	);
};



Filters.propTypes = {
	children: PropTypes.node,
	onSetFilter: PropTypes.func,
	onDeleteFilter: PropTypes.func
};

export default Filters;