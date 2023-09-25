import "./App.css";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import Sneakers from "./pages/Sneakers";
import Admin from "./pages/Admin";

export const CartContext = createContext([]);
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/sneakers" element={<Sneakers />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export { App };
