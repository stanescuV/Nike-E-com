import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import Sneakers from "./pages/Sneakers";
import Admin from "./pages/sign/Admin";
import Checkout from "./pages/Checkout";
import SignUp from "./pages/sign/SignUp";
import SignIn from "./pages/sign/SignIn";
import Orders from "./pages/Orders";
import SuccessOrder from "./pages/SuccessOrder";
import { AuthProvider } from "./contexts/AuthContext";

//CONTEXTS

//cart context
export const CartContext = createContext([]);

//auth context
// export const AuthContext = createContext([]);



function App() {
  console.log(process.env.REACT_APP_SERVER);
  let existingCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(existingCart ? JSON.parse(existingCart) : []);


 

  return (
    <div className="App">
      <AuthProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/launches" element={<Launches />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/orders" element ={<Orders />}/> 
          <Route path="/success-order" element ={<SuccessOrder />}/> 
        </Routes>
      </CartContext.Provider>
      </AuthProvider>
    </div>
  );
}

export { App };
