import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import Sneakers from "./pages/Sneakers";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;
