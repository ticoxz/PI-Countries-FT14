import React from 'react';
import { Link } from 'react-scroll'
import Arrow from './arrow.svg';
import './LandingPage.css'



const LandingPage = () => {
    return (
        <div className="Box-LandingPage">
            <div className="LandingPage">
                <div className="Margin-LandingPage">
                    <h1 className="Title-LandingPage">Welcome To Countries APP!</h1>
                    <p className="Info-LandingPage">Aqui Puedes elegir un Pais y añadirle actividades.</p>
                    <Link to="NavBar" spy={true} smooth={true}><img className="animation" alt="arrow" src={Arrow}></img></Link>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;