import React, { Component } from 'react';
import Caroussel2 from '../components/Caroussel2';
import sWild from "../pictures/stayWild.png";
import BannerF from '../components/BannerF';
import { Link } from 'react-router-dom';

import '../css/Fashion.css';


class Fashion extends Component {
    constructor() {
      super();
  
      this.state = {
        
      };
    }
    render() {
      return (
        <div>
          <BannerF />
          <div className="artistName">
              <div className="urlFashion">
              <Caroussel2 />
              </div>
              <div className="descipt-music">
                <strong>W I L D E R : SEVEN </strong><br/>
                <br/>L A N G U A G E : REACT <br/>
                <br/>S T Y L E : ALL STYLE  <br/>
                <br/>V I L L E : BORDEAUX <br/>
                

                <div className="description">
                    <br/><strong>S E V E N alias Florent est un élève de la WCS de Bordeaux passioné par le lifestyle.<br/>
                    Son expérience dans la "Fashion Sphère" lui a permis d'acquérir une connaissance du marché <br/>
                    et le retranscrit dans sa collection d'outfits. </strong>
                    <div className="logo-outfit">
                        <img className="sWild" src={sWild} alt="stayWild" /> 
                    </div>
                </div>
              </div>
          </div>
        </div>
      );
    }
}

export default Fashion;