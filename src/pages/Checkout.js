import React from 'react'
import { useState } from 'react';
import Navbar from "../components/navbar/navbar"
import CheckoutComponent from '../components/checkout/Checkout';
import Footer from '../components/footer/Footer';


function Checkout() {
  
  const [email, setEmail] = useState("")


  return (
  
  <div>
    <Navbar />
    <CheckoutComponent></CheckoutComponent>
    <Footer />
  </div>
    
  );
}

export default Checkout