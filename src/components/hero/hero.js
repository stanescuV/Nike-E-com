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
      <img className="grid-img" id="air-jordan" src={AirJordan}></img>

      <div className="sub-imgs">
        <img className="grid-img" id="air-jordan2" src={AirJordan2}></img>
        <img className="grid-img" id="nb" src={NewBalance}></img>
        <img className="grid-img" id="nike-air" src={NikeAir}></img>
        <img className="grid-img" id="oakley" src={Oakley}></img>
      </div>
    </div>
  );
}

export default hero;
