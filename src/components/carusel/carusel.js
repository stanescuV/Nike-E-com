import React, { useState, useEffect, useContext } from "react";
import Carousel from "react-elastic-carousel";
import "./carusel.css";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import IconButton from "../buttons/Buttons";
import { TrendingUp } from "@mui/icons-material";
import { CartContext } from "../../App";

function Carusel() {
  const [date, setDate] = useState([]);

  const { cart, setCart } = useContext(CartContext);

  // INITIALIZAM CART UL LA INCEPUT SI IL BAGAM IN LOCAL STORAGE
  
  useEffect(() =>{localStorage.getItem("cart", JSON.stringify(cart))}
  , []);
  useEffect(()=>{localStorage.setItem("cart", JSON.stringify(cart))},[cart]);
  //no implicit return on useEffect 

  /*FUNCTION ADD ITEM cart*/

  function addItemCart(item) {
    //one item is added to the cart, if exists qt++, if not add it to the cart
    const existingItem = cart.find((obj) => obj.id === item.id);

    if (existingItem) {
      // If it exists
      existingItem.quantity++;
    } else {
      // If it doesn't exist
      setCart([
        ...cart,
        {
          name: item.name,
          price: item.pret,
          id: item.id,
          picture: item.src,
          quantity: 1,
        },
      ]);
    }
  }
  //delete 1 item in the cart
  function deleteItem(item) {
    let filteredCart = [];
    cart.map((product) => {
      if (product.id === item.id && product.quantity === 1) {
        filteredCart = cart.filter((prod) => prod.id !== item.id);
      }
    });
    setCart([...filteredCart]);
  }

  //delete all cart items
  function deleteAllCart(cart) {
    setCart([]);
  }

  /*FETCH*/
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
        <Item key={item.id}>
          <img className="sneakers" src={item.src}></img>
          <div className="sneakers-info">
            <h4 id="sneakers-name">{item.name.toUpperCase()}</h4>
            <p id="sneakers-price"> R: {(item.pret * 1).toFixed(2)}$</p>
          </div>
          <div
            onClick={() => {
              addItemCart(item);
            }}
          >
            <IconButton key={item.id} />
          </div>
        </Item>
      </div>
    ));
  }
  return (
    <>
      <div className="AppC">
        {/*DELETE ALL CART JUST TESTING */}
        <button
          onClick={() => {
            deleteAllCart();
          }}
        >
          Delete all cart
        </button>
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
