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
      {/* IMPLEMENTARE STRIPE -*-*-*-*-*-*-**--*-
      <div onClick={()=>
        fetch('http://localhost:3002/create-checkout-session',{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            items:[
              //ar trebuii un array de obiecte aici cu spread operator ca sa trimita cantitatile si Id ul pe server 
              {id:1, quantity:2},
              {id:2, quantity:4}
            ]
          })
        })
        .then(res=>{
          if (res.ok) return res.json()
          return res.json().then(json=> Promise.reject(json))
        }).then(({url})=>{
      window.location=url }
      ).catch(e=>{
        console.error(e.error)
      })
      }}>
      <button > FINALIZEAZA COMANDA</button>
    */}
      <Link to="/Checkout" > FINALIZEAZA COMANDA</Link>
      </div>
      
    
  );
}

export default PopoverItem;
