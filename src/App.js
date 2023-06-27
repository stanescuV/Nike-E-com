import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Launches from "./components/launches/Launches";
import Sneakers from "./components/sneakers/Sneakers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;
