import Navbar from "../navbar/navbar";
import Carusel from "../carusel/carusel";
import Hero from "../hero/hero";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carusel />
    </div>
  );
}
