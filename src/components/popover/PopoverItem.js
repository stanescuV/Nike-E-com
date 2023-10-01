import React, { useContext, useState } from "react";
import "../popover/popover.css";
import { Link } from "react-router-dom";

import { CartContext } from "../../App";

function PopoverItem() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((product) => {
          if (cart.length > 0) {
            return (
              <div className="container">
                <div id={product.id}>
                  {product.name} {product.price}$
                </div>
                <img className="prodPhoto" src={product.picture}></img>
              </div>
            );
            
          }
        })
      ) : (
        <div> your cart is empty </div>
      )}
      <Link to="/LAUNCHES"> FINALIZEAZA COMANDA</Link>
    </div>
  );
}

export default PopoverItem;
