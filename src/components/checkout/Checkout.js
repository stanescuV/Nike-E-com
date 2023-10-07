import React, {useState} from 'react'
import "./checkout.css"
import Navbar from "../navbar/navbar"


function Checkout() {
  
  const [email, setEmail] = useState("")


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
      <button type="submit">Submit</button>
      </form>


    </div>
  );
}
export default Checkout