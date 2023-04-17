import React from 'react'
import './headerCausasTransformacion.scss';
import Imagenes from '../imagenes/Imagenes';



const HeaderCausasTransformacion = ( ) => {
    return (
        <>

            <header>

                <div className="nav-container">
                    <nav>
                        <div className="nav-container__logo">
                            <Imagenes token={"logoFilantropia"} nameImg={"imgLogo"}/>
                        </div>
                        <div className="nav-container__options">
                            <a href="./home"> Inicio </a>
                            <a href="#fondos"> Fondos </a>
                            <a href="#comoDonar"> ¿Como Donar? </a>
                            <a href="#contactos"> Acerca nosotros </a>
                        </div>
                    </nav>
                </div>

                <div className="header-container">
                    <div className="cardHeader-container">
                        <h1>Transf​ormación humanista</h1>
                        <div className="cardHeader-container__button">
                            <a href="./donaciones.html">Donar Aquí</a>
                        </div>
                    </div>
                    <div className="header-container__image">
                        <Imagenes token={"transformacionHumanista"}/>
                    </div>
                </div>
            </header>

        </>
    );
}

export default HeaderCausasTransformacion;