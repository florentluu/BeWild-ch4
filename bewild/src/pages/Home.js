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
            <Link to="/shop" className="ban-button1">
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
            <div>ECO</div>
            <div>UNISEX</div>
            <div>STAR</div>
        </div>
        <div className="About">
            <div className="title-About"> 
                QUI SOMMES-NOUS ?
            </div>
            <div className="about-desc">
                WILD CIRCUS SHOP<br/> 
                <br/>
                est un endroit où tu pourras retrouver <br/>
                <br/>
                les meilleurs goodies et outfits de notre marque <br/>
                <br/>
                BE WILD.
                <br/>
            </div>
            <div className="logo-about">
                <img className="enter-gif" src={LogoB} alt="gifEnter" />
            </div>
        </div>
        <div className="title-Outfits">
            O U T F I T S
        </div>
        <div className="carouss">
            <Caroussel/>
        </div>
    </div>
  );
}

export default Home;