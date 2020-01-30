import React from 'react';
import Banner from'../components/Banner';
import Caroussel2 from '../components/Caroussel2';
import sWild from "../pictures/stayWild.png";

function AllWilders() {
  return (
    <div className="allWilders">
        <Banner/>

        {/* ---- MUSIC ------ */}

        <div className="artistName">
              <div className="urlMusic">
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/399708876&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
              </div>
              <div className="descipt-music">
                <strong>W I L D E R : FUENCORE </strong><br/>
                <br/>L A N G U A G E : REACT <br/>
                <br/>S T Y L E : HARDSTYLE  <br/>
                <br/>V I L L E : BORDEAUX <br/>
                

                <div className="description">
                <br/><strong>F U E N C O R E alias Clément est un élève de la WCS de Bordeaux passioné de musique.<br/>
                 Il a su créer son propre style de son, avec de lourdes basses et des sons acides qui vous <br/>
                 fera bouger la tête. </strong>
                </div>
              </div>
          </div>
          {/* -----TEST------ */}

          <div className="artistName">
              <div className="urlMusic">
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/399708876&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
              </div>
              <div className="descipt-music">
                <strong>W I L D E R : FUENCORE </strong><br/>
                <br/>L A N G U A G E : REACT <br/>
                <br/>S T Y L E : HARDSTYLE  <br/>
                <br/>V I L L E : BORDEAUX <br/>
                

                <div className="description">
                {/* <br/><strong>{(this.state.musicArtists).map(musicArtists=> {musicArtists.description})}</strong> */}
                <br/><strong>{('')}</strong>
                </div>
              </div>
          </div>

          {/* -------FASHION--------- */}

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

export default AllWilders;