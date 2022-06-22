import styled from 'styled-components';

export const ImageTitle = styled.img`
	width: auto;
	max-height: 60px;
`;

export const Logo = styled.div`
	position: relative;
	width: auto;
	max-width: 80%;
	margin-right: 30px;
	z-index: 3;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding: 24px;
	box-sizing: border-box;
`;

export const Gallery = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 10px;
	box-sizing: border-box;
`;

export const Item = styled.div`
	transition: width 0.3s;

	${({ columns }) => columns == 1 && `
		width: 95%;
		height: 150px;
		//height: 95%;
		padding: 2.5%;
	`}

	${({ columns }) => columns == 2 && `
		width: 45%;
		height: 150px;
		//height: 45%;
		padding: 2.5%;
	`}

	${({ columns }) => columns == 3 && `
		width: 30%;
		height: 150px;
		//height: 30%;
		padding: 1.666666666666667%;
	`}

	${({ columns }) => columns == 4 && `
		width: 22%;
		height: 150px;
		//height: 22%;
		padding: 1.5%;
	`}

	${({ columns }) => columns == 5 && `
		width: 18%;
		height: 150px;
		//height: 18%;
		padding: 1%;
	`}
`;

export const Image = styled.img`
	border-radius: 7px;
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
`;

export const Text = styled.span`
	color: #fff;
	font-weight: 500;
	margin: 30px 10px;
	padding: 10px 24px;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.1) ;
`;

export const More = styled.div`
	position: absolute;
	bottom: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2px 0;
	border-radius: 6px;
	background-color: #553296;
	color: #fff;
	padding: 3px 6px;
	padding-bottom: 3px;
	margin: 20px 3px 55px 3px;
	border: 1px solid #553296;
	font-size: 12px;
	height: 30px;
	cursor: pointer;
	text-transform: capitalize;
	
	&:hover{
		background: rgb(88 40 170 / 50%);
		border: 1px solid rgb(147 70 239 / 70%);
	}
`;