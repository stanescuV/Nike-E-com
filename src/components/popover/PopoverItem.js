import React, { useContext, useState } from "react";
import "../popover/popover.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

function PopoverItem() {
  const { cart, setCart } = useContext(CartContext);
    /*FUNCTION ADD ITEM cart*/

  function addItemCart(item) {
    //one item is added to the cart, if exists qt++, if not add it to the cart
    const existingItem = cart.find((obj) => obj.id === item.id);
   
    if (existingItem) {
      // If it exists
      existingItem.quantity++;
      setCart([...cart]);
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


  return (
    <div className="bigContainer">
      <div className="topBar">
        <p>Article 101</p>
        <p>Total SAR</p>
      </div>
      {cart.length > 0 ? (
        cart.map((product) => {
            return (
             <div className="products">
                <div className="pd-info">
                  <img className="prodPhoto" src={product.picture}></img>
                  <div className="product-cart"id={product.id}>{product.name}</div>
                </div>
                <div className="pd-price">
                  <div>{product.price}$</div>
                  <div className="pd-qty">
                    <div className="buttons">
                      <button >-</button>
                      <p>{product.quantity}</p>
                      <button onClick={()=>{addItemCart(product)}}>+</button>
                    </div>
                  </div>
                </div>
    
            </div>
            );
            
          
        })
      ) : (
        <div className="bigContainer"> your cart is empty </div>
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
      
      
      <Link style={{display: "block"}} to="/Checkout" > FINALIZEAZA COMANDA</Link>

    </div>
      
    
  );
}

export default PopoverItem;
