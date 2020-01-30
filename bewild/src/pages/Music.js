import React, { Component } from 'react';
import axios from 'axios';
import BannerM from '../components/BannerM';
// import { Link } from 'react-router-dom';
/* eslint-disable */

import '../css/Music.css';

class Music extends Component {
    constructor() {
      super();
      this.state = {
        musicArtists: []
      };
      
    }
    
    componentDidMount() {
      const clientParams = {
        mail: this.state.mail,
        name: this.state.name,
        firstname: this.state.firstname,
        adress1: this.state.adress1
      };
      axios.get(`http://localhost:3000/api/music`)
        .then(res => {
          const musicArtists = res.data[0];
          this.setState({ musicArtists});
          console.log(res.data[0].description)
        })
    }
    
    render() {
      
      return (
        <div className="allMusic">
          <BannerM />
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


          {/* -----TEST------ */}
        </div>
      );
    }
}

export default Music;