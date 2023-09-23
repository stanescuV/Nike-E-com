import React, { useState } from "react";
import styled from "styled-components";
import "../popover/popover.css";

function PopoverItem() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let cartProducts;

  for (let i = 0; i <= cart.length; i++) {
    if (cart && cart.length > 0) {
      cartProducts = (
        <div className="container">
          <div className="cartPopover">
            <img className="articlePhoto" src={cart[i].picture}></img>
            <p className="articleName"> {cart[i].name}</p>
            <div className="buttons">
              <button className="add">+</button>
              <button className="remove">-</button>
              <button className="removeAll">X</button>
            </div>
          </div>
        </div>
      );
    } else {
      cartProducts = (
        <div> Your cart is empty mate, go and buy something ! </div>
      );
    }
    return <div>{cartProducts}</div>;
  }
}
export default PopoverItem;
