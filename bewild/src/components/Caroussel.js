import React from "react";
import "../css/Caroussel.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="allCar">
  <Carousel autoPlay>
    <div className= "pic1">
      <img src="https://image.noelshack.com/fichiers/2020/05/3/1580322514-femme.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div className= "pic2">
      <img src="https://image.noelshack.com/fichiers/2020/05/3/1580322514-homme.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div className= "pic3">
      <img src="https://image.noelshack.com/fichiers/2020/05/3/1580322514-femmehoodie.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div className= "pic4">
      <img src="https://image.noelshack.com/fichiers/2020/05/3/1580322693-hommehood.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div className= "pic5">
      <img src="https://image.noelshack.com/fichiers/2020/05/3/1580331253-bonnet1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div className= "pic6">
      <img src="https://image.noelshack.com/fichiers/2020/05/3/1580331253-hat1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div className= "pic7">
      <img src="https://image.noelshack.com/fichiers/2020/05/3/1580331253-totebag.jpg" />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
  </div>
);