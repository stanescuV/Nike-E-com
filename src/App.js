import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes, json } from "react-router-dom";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import Sneakers from "./pages/Sneakers";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";

export const CartContext = createContext([]);
function App() {
  let existingCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(existingCart ? JSON.parse(existingCart) : []);


 

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sneakers" element={<Sneakers />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export { App };
