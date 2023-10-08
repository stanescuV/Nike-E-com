import React, {useState,useContext} from 'react'
import "./checkout.css"
import Navbar from "../navbar/navbar"
import { CartContext } from "../../App";


function Checkout() {
  const { cart, setCart } = useContext(CartContext);

   
  const [email, setEmail] = useState("")
  for(let i of cart){
    cartCheckout.push({id: cart[i].id, quantity: cart[i].quantity
    })
  }
const cartCheckout = cart.map((product)=> {
   {return{id: product.id, quantity: product.quantity}}
  

}

)
  function trimiteDate (){
    fetch('http://localhost:3001/create-checkout-session', {
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
    <form className="id-form" onSubmit={(e)=>{
        console.log(e.target[1].value)
       //previne default html 
       e.preventDefault();
        }}>
      <label for="email-input">e-mail address</label>
      <input name="email" id="email-input" type="email" placeholder="qwert@gmail.com" onChange={(e)=> setEmail(e.target.value)}></input>
      <input  type="text"></input>
      <input name="data-de-nastere" type="date"></input>
      <button type="submit" onClick={()=> trimiteDate()}>Submit</button>
    </form>


    </div>
  );
}
export default Checkout