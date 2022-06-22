/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

export const ContenedorModal= styled.div`
    width: 500px;
    min-height: 100px;
    background: rgb(51,86,110);
	background: linear-gradient(338deg, rgba(51,86,110,1) 20%, rgba(30,30,31,1) 100%);
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(100,199,111,0.2) 0px 7px 29px 0px;
    padding: 24px 24px 38px 24px;
    padding-right: 50px;

    h3{
        font-size: 14px;
        font-weight: 400;
        color: #eee;
        margin: 0px;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: #eee;
        margin: 0px;
        padding-top: 10px
    }

`;

export const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 15px;
    
    
    
	
    
    h2 {
        font-weight: 400;
        font-size: 20px;
        color: #fff;
        line-height: 20px;
        margin: 0px;
        padding: 5px 0;
    }

`;

export const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;    
    background: none;
    transition: .3s ease all;
    border-radius: 5px;
    color: #fff;
    
    &:hover {
        color: #000;
    }

    
`;