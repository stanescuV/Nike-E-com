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
      {cart.length > 0 ? (
        renderCartItems
      ) : (
        <div className="bigContainer"> your cart is empty </div>
      )}
       <div className="checkout-div">
          <Link to="/Checkout" >
            <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
        <div className="order-info">
          <div className="subtotal">
            <p className="order-text" id="subtotal">Subtotal</p>
            <p className="order-text" id="shipment">Shipment</p>
            <p className="order-text" id="shipment-info">Delivery time 2-4 working days</p>
          </div>
          <div className="sum">
            <p className="prices" id="total-price">100$</p>
            <p className="prices" id="shipment-price">10$</p>
          </div>
        </div>
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

    </div>
      
    
  );
}

export default PopoverItem;
