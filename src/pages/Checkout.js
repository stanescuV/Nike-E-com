import React from 'react'
import Navbar from "../components/navbar/navbar";
import { useState } from 'react';
import CheckoutComponent from '../components/checkout/Checkout';


function Checkout() {
  
  const [email, setEmail] = useState("")


  return (
    <CheckoutComponent></CheckoutComponent>
  );
}

export default Checkout