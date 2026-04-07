import "./styles/about.css";

function About() {
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }

  const cards = [
    { icon: "fas fa-user-shield", text: "Equipes treinadas" },
    { icon: "fas fa-microchip", text: "Tecnologia de ponta" },
    { icon: "fas fa-chart-line", text: "Gestão eficiente" },
    { icon: "fas fa-video", text: "Monitoramento 24h" },
  ];

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-container">
        {/* TEXTO */}
        <div className="sobre-text reveal">
          <h2 className="titulo">Quem somos</h2>

          <p className="subtitulo">
            Controle total, menos riscos e mais segurança para sua empresa
          </p>

          <p>
            Na VITZ, combinamos tecnologia avançada, monitoramento 24h e
            processos estratégicos para garantir controle total, redução de
            riscos e máxima eficiência operacional.
          </p>

          <p className="destaque">
            Você foca no crescimento do seu negócio. Nós cuidamos da segurança,
            organização e performance do seu ambiente.
          </p>

          <div className="sobre-cards">
            {cards.map((card, index) => (
              <div
                key={index}
                className="card-mini"
                onMouseMove={handleMouseMove}
                style={{ "--delay": `${index * 0.15}s` }}
              >
                <i className={card.icon}></i>
                {card.text}
              </div>
            ))}
          </div>
        </div>

        {/* IMAGEM */}
        <div className="sobre-img reveal">
          <img src="/images/sobre.png" alt="Segurança empresarial" />
          <a href="#contato" className="btn-sobre">
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
