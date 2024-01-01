import React, { useContext, useEffect, useState } from "react";
import "../popover/popover.css";
import { CartContext } from "../../App";
import { useAuth } from "../../contexts/AuthContext";

function PopoverItem() {
  const { cart, setCart } = useContext(CartContext);
  const {currentUser} = useAuth();
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
    console.log(cart);
    let arrFiltrat = [];

    //if qt = 1 
    if(item.quantity === 1){
      arrFiltrat = cart.filter((obj)=>obj.id !== item.id)
      setCart([...arrFiltrat])
    }

    //if qt > 1 
    if(item.quantity>1){
      item.quantity--;
      setCart([...cart])
    }
    
  }
  //subtotal function
  
  function calcSubtotal(cart){
    let total = 0;
    for(let i =0; i<cart.length ; i++){
      let item = cart[i];
      total += (item.quantity * item.price);
    }
    return total
  }
  
  //takes cart with products and renders items on screen
  const renderCartItems = cart.map((product) => {
      return (
      
       <div className="products">
          <div className="pd-info">
            <img className="prodPhoto" src={product.picture}></img>
            <div className="product-cart"id={product.id}>{product.name}</div>
          </div>
          <div className="pd-price">
            <div className="pd-tag">{product.price}$</div>
            <div className="pd-qty">
              <div className="buttons">
                <button onClick={()=> {deleteItem(product)}} >-</button>
                <p>{product.quantity}</p>
                <button onClick={()=>{addItemCart(product)}}>+</button>
              </div>
            </div>
          </div>
        </div>
      
        
      );
  })
 


  return (
    <div className="bigContainer">
      <div className="topBar">
        <p>Article 101</p>
        <p>Total SAR</p>
      </div>
      { cart.length > 0 ? (
        renderCartItems
      ) : (
        <div className="bigContainer"> your cart is empty </div>
      )}
       <div className="checkout-div">
      <div  >
        <button style={{cursor:"pointer"}} onClick={()=>{
        
        fetch('http://localhost:3001/create-checkout-session',{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            items:[...cart],
            uid: currentUser.uid
          })
        })
        .then(res=>{
          if (res.ok) return res.json()
          return res.json()
        .then(json=> Promise.reject(json))
        })
        .then(({url})=>{window.location=url }).catch(e=>{console.error(e.error)})
      }}  className="checkout-btn">Checkout</button>
      </div>
         {/*

           <Link  >
            <button className="checkout-btn">Checkout</button>
          </Link>
      */}
        </div>
        <div className="order-info">
          <div className="subtotal">
            <p className="order-text" id="subtotal">Subtotal</p>
            <p className="order-text" id="shipment">Shipment</p>
            <p className="order-text" id="shipment-info">Delivery time 2-4 working days</p>
          </div>
          <div className="sum">
            <p className="prices" id="total-price">{calcSubtotal(cart)}$</p>
            <p className="prices" id="shipment-price">10$</p>
          </div>
        </div>
      

    </div>
      
    
  );
}

export default PopoverItem;
