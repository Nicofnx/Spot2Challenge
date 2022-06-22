import styled from 'styled-components';
import SpotLogo from '../images/logo_spot2.png';

export const Title = styled.img`
	width: auto;
	max-width: 50%;
	margin: 10%;
`;

export const SelectMenu = styled.div`
	display: flex;
	margin-top: auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	text-align: center;
	z-index: 1;
`;

export const Item = styled.div`
	font-size: 30px;
	font-weight: 500;
	color: #000;
	margin: 10px 0px;
	text-transform: uppercase;
	text-decoration: none;
	padding: 6px 16px;
	border: 2px solid #333;
	border-radius: 10px;
`;

export const Intermitent = styled.span`
	display: flex;
	margin-top: auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 18px;
	font-weight: 400;
	color: #000;
	margin-bottom: 10vh;

	@keyframes fadeAnimation {
		0%   { opacity:0.7; }
		50%  { opacity:0.2; }
		100% { opacity:0.7; }
	}

	animation: fadeAnimation 3s infinite;
`;

export const RocketImage = styled.div`
	height: 100%;
	max-height: 50%;
	position: absolute;
	bottom: 0px;
	z-index: 0;
	left: 0;
	right: 0;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom center;
	background-image: url(${SpotLogo});
`;