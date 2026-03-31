import About from "./components/About";
import Contact from "./components/Contact";
import Differentials from "./components/Differentials";
import Hero from "./components/Hero";
import MVV from "./components/Mvv";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import useReveal from "./hooks/useRevel";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MVV />
      <Services />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
