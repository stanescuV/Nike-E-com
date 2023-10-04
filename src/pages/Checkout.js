import React from 'react'
import Navbar from "../components/navbar/navbar";
import { useState } from 'react';


function Checkout() {
  
  const [email, setEmail] = useState("")


  return (
    <div>
      <Navbar />
      <form onSubmit={(e)=>{
        console.log(e.target[2].value)
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