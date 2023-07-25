import Navbar from "../components/navbar/navbar";
import Carusel from "../components/carusel/carusel";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carusel />
    </div>
  );
}
