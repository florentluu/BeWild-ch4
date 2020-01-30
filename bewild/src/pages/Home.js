import React from 'react';
import { Link } from 'react-router-dom';

import Caroussel from "../components/Caroussel";
import Enter from "../pictures/enter.gif";
import LogoB from "../pictures/logo-black.png";
import Eco from "../pictures/eco.png";
import Star from "../pictures/star.png";
import Unisex from "../pictures/unisex.png";
import "../css/Home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    
    
  return (
    <div className="Home">
        <div className="ban-Home">
            <Link to="/artists" className="ban-button1">
            <div className="ban-button1">
                <img className="enter-gif" src={Enter} alt="gifEnter" /> 
            </div>
            </Link>
        </div>
        <div className="title-Valeurs">
            NOS   VALEURS
        </div>
        <div className="valeurs">
            <img className="enter-gif" src={Eco} alt="gifEnter"/>
            <img className="enter-gif" src={Unisex} alt="gifEnter" />
            <img className="enter-gif" src={Star} alt="gifEnter" />
            
        </div>
        <div className="valeurs-legend">
            <div><strong>E P A N O U I S S E M E N T &nbsp; W I L D E R</strong></div>
            <div ><strong>L E &nbsp; P A R T A G E</strong></div>
            <div className="part-leg"><strong>D E C O U V E R T E &nbsp; T A L E N T</strong></div>
        </div>
        <div className="About">
            <div className="title-About"> 
                QUI SOMMES-NOUS ?
            </div>
            <div className="about-desc">
                WILD CIRCUS ARTIST <br/> 
                <br/>
                est l'endroit où tu pourras retrouver <br/>
                <br/>
                tous les créateurs de la communauté. <br/>
                <br/>
                De la musique à la mode, l'imagination n'a aucune limite. <br/>
                <br/>" STAY WILD "
                <br/>
            </div>
            <div className="logo-about">
                <img className="enter-gif" src={LogoB} alt="gifEnter" />
            </div>
        </div>
        <div className="title-Outfits">
            A R T I S T E S
        </div>
        <div className="carouss">
            <Caroussel/>
        </div>
    </div>
  );
}

export default Home;