import React, {useState,useContext} from 'react'
import "./checkout.css"
import Navbar from "../navbar/navbar"
import { CartContext } from "../../App";


function Checkout() {
  const { cart, setCart } = useContext(CartContext);

   
  const [email, setEmail] = useState("")

  const cartCheckout = cart.map((product)=> {
  {return{id: product.id, name: product.name, quantity: product.quantity}}
  
  })


  function renderItemsCart(cart){
    return cart.map((item)=>(
      <div className='container-cart-items'>
        <img src={item.picture}></img>
        <div className='info'>

        <div>{item.name}</div>
        
        <div>{item.price}$</div>
        </div>
      </div>
    ))
  }


  function trimiteDate (){
    fetch('http://localhost:3001/comanda', {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify([...cartCheckout

        ])
      })
  }



  return (
    <div>
      <Navbar />
    <div className='form-container'>

      <form className="id-form" onSubmit={(e)=>{
        console.log({email : e.target[0].value, country: e.target[1].value, region: e.target[2].value, street: e.target[3].value, birth: e.target[4].value, tel: e.target[5].value })
        //previne default html 
        e.preventDefault();
      }}>
        <div>
        <label form="email-input">E-Mail</label>
        <input name="email" id="email-input" type="email" placeholder="qwert@gmail.com" onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
        <div>
          <div>

        <label form="country-input">Country</label>
        <input  name="country" type="text" placeholder='Romania'></input>
          </div>
          <div>
        <label form="region-input">Region</label>
        <input  name="region" type="text" placeholder='DOLJ'></input>
          </div>
        <label form="street-input">Street</label>
        <input  name="street" type="text" placeholder='29 Str. XXXX'></input>
        </div>
        <label form="birth-input">Birth</label>
        <input name="birth" type="date"></input>
        <label form="tel-input">Tel : </label>
        <input name="tel" type="tel"></input>
        <button type="submit" onClick={()=> trimiteDate()}>Submit</button>
      </form>
      <div>

      </div>

    </div>
      { renderItemsCart(cart)}

    </div>
  );
}
export default Checkout