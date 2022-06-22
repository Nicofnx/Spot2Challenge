import React from 'react';
import { XCircle } from 'react-feather';
import PropTypes from 'prop-types';
import { Overlay, ContenedorModal, EncabezadoModal, BotonCerrar,} from './modals.styles';

const Modal = ({stateOn, stateOff, title, spotSquare, description}) => {


    


	return (
		<>
			{stateOn &&
                <Overlay>
                	<ContenedorModal>
                		<EncabezadoModal>
                			<h2>{title}</h2>
                		</EncabezadoModal>
                		<BotonCerrar
                			onClick={()=>{stateOff(false);}}
                		><XCircle/></BotonCerrar>
                		<h3>Description: {description}</h3>
						<p>Squere Space: {spotSquare} m2</p>
                	</ContenedorModal>
                </Overlay>
			};
		</>
	);
};





Modal.propTypes = {
	title: PropTypes.string,
	spotSquare: PropTypes.string,
	description: PropTypes.string,
	stateOn: PropTypes.bool,
	stateOff: PropTypes.func,
};

export default Modal;

