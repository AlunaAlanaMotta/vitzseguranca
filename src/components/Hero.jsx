import useScrollVisibility from "../hooks/useScrollVisibility";
import "./styles/hero.css";

function Hero() {
  const isAtTop = useScrollVisibility(50);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="hero-content reveal">
        <h1>Segurança inteligente para proteger o que realmente importa</h1>

        <p>
          Mais segurança, menos riscos e total controle do seu ambiente com
          tecnologia avançada e monitoramento 24h.
        </p>

        <a
          href="https://wa.me/5541995502824"
          className="btn-hero"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar orçamento
        </a>
      </div>
      <div className={`scroll-indicator ${!isAtTop ? "hide" : ""}`} />
    </section>
  );
}

export default Hero;
