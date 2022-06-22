import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../components/layout/body';
import Main from '../components/layout/main';
import Spot2Logo from '../images/logo_spot2.png';
import { Title, SelectMenu, Item, Intermitent } from './home.styles';

const Home = () => {
	
	return(
		<Body>
			<Main>
				<Title src={ Spot2Logo }/>
			</Main>

			<SelectMenu>
				<Link to= "/list" >
					<Item>{ 'Busca tu proxima casa' }</Item>
				</Link>
				
			</SelectMenu>

			<Intermitent>{ 'Challenge by fnx' }</Intermitent>
			
		</Body>
	);
};

export default Home;