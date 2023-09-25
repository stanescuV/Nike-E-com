import React, { useContext, useState } from "react";
import styled from "styled-components";
import "../popover/popover.css";
import { CartContext } from "../../App";
import { render } from "@testing-library/react";

function PopoverItem() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((product) => {
          if (cart.length > 0) {
            return <div id={product.id}>{product.name}</div>;
          }
        })
      ) : (
        <div> your cart is empty </div>
      )}
    </div>
  );
}

export default PopoverItem;
