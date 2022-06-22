import styled from 'styled-components';

export const FiltersContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	box-sizing: border-box;
	z-index: 2;
`;

export const Wrapper = styled.div`
	padding: 24px;
`;

export const Button = styled.div`
	position: relative;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2px 0;
	border-radius: 6px;
	background-color: #E4B46A;
	color: #000;
	padding: 3px 8px;
	padding-bottom: 3px;
	margin: 6px 3px;
	font-size: 14px;
	height: 40px;
	transition: background-color 0.2s;
	cursor: pointer;

	svg{
		width: 16px;
		color: #000;
		margin-right: 6px;
		margin-top: 1px;
	}

	&:hover{
		background: #ffcb7a;
	}

	${({ selected }) => selected &&`
		background: rgb(147 70 239 / 100%);
		&:hover{
			background: rgb(147 70 239 / 70%);
		}
	`}

	${({ full }) => full &&`
		width: 100%;
	`}
`;

export const Tags = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2px 0;
	border-radius: 6px;
	//background: rgb(68 25 119 / 0%);
	background-color: #553296;
	color: #fff;
	padding: 3px 6px;
	padding-bottom: 3px;
	margin: 6px 3px;
	border: 1px solid #553296;
	font-size: 12px;
	height: 30px;
	cursor: pointer;
	text-transform: capitalize;

	svg{
		width: 16px;
		color: #fff;
		margin-right: 6px;
		margin-top: 1px;
	}
	
	&:hover{
		background: rgb(88 40 170 / 50%);
		border: 1px solid rgb(147 70 239 / 70%);
	}

	${({ selected }) => selected &&`
		background: rgb(147 70 239 / 100%);
		border: 1px solid rgb(187 170 255 / 50%);
		&:hover{
			background: rgb(147 70 239 / 70%);
		}
	`}

	${({ full }) => full &&`
		width: 100%;
	`}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 64px;
	padding: 10px;
	backdrop-filter: blur(16px);
	box-sizing: border-box;
`;

export const Content = styled.div`
	position: fixed;
	top: -50%;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	transition: top 0.2s, opacity 0.3s;
	z-index: -1;
	background: rgb(38,20,82);
	opacity: 0;
	box-sizing: border-box;
	padding-top: 84px;

	${({ opened }) => opened &&`
		top: 0px;
		opacity: 1;
	`}

	${({ maxViewport }) => maxViewport &&`
		box-shadow: 0px 0px 0px  ${maxViewport}px rgba(0,0,0,0.7);
	`}

	//box-shadow: 0px 0px 0px 999px rgba(0,0,0,0.7);
`;

export const Shadow = styled.div`
	position: fixed;
	top: -100%;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	transition: opacity 0.3s;
	z-index: -2;
	background: rgba(0, 0, 0, 0.6);
	opacity: 0;
	box-sizing: border-box;

	${({ opened }) => opened &&`
		top: 0px;
		opacity: 1;
	`}
`;

export const Location = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-direction: column;
	margin: 10px 0px ;
`;

export const Options = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Title = styled.h5`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 4px 4px 2px 4px;
	margin: 0;
	color: #ffffffe0;
	font-size: 14px;
	font-weight: 600;
	box-sizing: border-box;
`;

export const Input = styled.input`
	border-radius: 5px;
	border: 1px solid #471f85;
	height: 40px;
	background: #200c38;
	outline: none;
	color: #eee;
	padding: 3px 10px;
	margin: 5px 0px;
	box-sizing: border-box;
	margin-right: auto;
	::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}
`;