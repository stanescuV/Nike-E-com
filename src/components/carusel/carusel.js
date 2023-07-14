import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import "./carusel.css";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import ButtonCart from "../buttons/Buttons";

function Carusel() {
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((r) => r.json())
      .then((rr) => setDate(rr));
  }, []);

  /*BREAK POINTS ELEMENTS TO SHOW */
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 },
  ];

  /* STYLING AN ITEM */

  const Item = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 15px 15px 30px;
    gap: 0px;
    background-color: #fdfbf4;
    width: 99.99%;
    height: 600px;

    border: 1px solid #191919;
  `;

  /*ELEMENTS */

  const nikeEl = [...date].splice(0, 6);
  const ceremonyEl = [...date].splice(6, 6);
  const jordanEl = [...date].splice(12, 6);

  /*RENDER EACH ELEMENT */

  function renderItems(date) {
    return date.map((item) => (
      <div>
        <Item>
          <img className="sneakers" src={item.src}></img>
          <div className="sneakers-info">
            <h4 id="sneakers-name">{item.name.toUpperCase()}</h4>
            <p id="sneakers-price"> R: {(item.pret * 1).toFixed(2)}$</p>
          </div>
          <ButtonCart />
        </Item>
      </div>
    ));
  }
  return (
    <>
      <div className="AppC">
        <Marquee>
          <h3 className="carusel-title">JUST DROPPED</h3>
        </Marquee>
        <Carousel breakPoints={breakPoints}>{renderItems(nikeEl)}</Carousel>

        <Marquee>
          <h3 className="carusel-title">CEREMONY</h3>
        </Marquee>
        <Carousel breakPoints={breakPoints}>{renderItems(ceremonyEl)}</Carousel>

        <Marquee>
          <h3 className="carusel-title">NIKE DUNK</h3>
        </Marquee>
        <Carousel breakPoints={breakPoints}>{renderItems(jordanEl)}</Carousel>
      </div>
    </>
  );
}

export default Carusel;
