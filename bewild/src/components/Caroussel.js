import React from "react";
import "../css/Caroussel.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div className="allCar">
  <Carousel autoPlay>
    <div className= "pic1">
      <img src="https://image.noelshack.com/fichiers/2020/05/4/1580389486-seven.png" />
      <p className="legend">Legend 1</p>
    </div>
    <div className= "pic2">
      <img src="https://image.noelshack.com/fichiers/2020/05/4/1580389487-fuencore.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div className= "pic3">
      <img src="https://image.noelshack.com/fichiers/2020/05/4/1580389486-seven.png" />
      <p className="legend">Legend 3</p>
    </div>
    <div className= "pic4">
      <img src="https://image.noelshack.com/fichiers/2020/05/4/1580389487-fuencore.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div className= "pic5">
      <img src="https://image.noelshack.com/fichiers/2020/05/4/1580389486-seven.png" />
      <p className="legend">Legend 1</p>
    </div>
    <div className= "pic6">
      <img src="https://image.noelshack.com/fichiers/2020/05/4/1580389487-fuencore.jpg" />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
  </div>
);