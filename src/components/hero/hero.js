import React from "react";
import AirJordan from "./img/AirJordan.png";
import NewBalance from "./img/NewBalance.png";
import NikeAir from "./img/nikeAir.png";
import Oakley from "./img/oakleyGlasses.png";
import AirJordan2 from "./img/AirJordan2.png";
import "./hero.css";

function hero() {
  return (
    <div className="hero-imgs">
      <a href="#">
        <img className="grid-img" id="air-jordan" src={AirJordan}></img>
      </a>

      <div className="sub-imgs">
        <a href="#">
          <img className="grid-img" id="air-jordan2" src={AirJordan2}></img>
        </a>
        <a href="#">
          <img className="grid-img" id="nike-air" src={NikeAir}></img>
        </a>
        <a href="#">
          <img className="grid-img" id="nb" src={NewBalance}></img>
        </a>
        <a href="#">
          <img className="grid-img" id="oakley" src={Oakley}></img>
        </a>
      </div>
    </div>
  );
}

export default hero;
