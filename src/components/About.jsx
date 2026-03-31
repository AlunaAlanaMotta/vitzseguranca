import "./styles/about.css";

function About() {
  return (
    <section id="sobre" className="sobre reveal">
      <div className="sobre-overlay"></div>

      <div className="sobre-content">
        <h2 className="titulo">Quem somos</h2>

        <p className="subtitulo">
          Segurança e gestão inteligente para empresas que não podem falhar.
        </p>

        <p>
          Na VITZ, combinamos tecnologia avançada, monitoramento 24h e processos
          estratégicos para garantir controle total, redução de riscos e máxima
          eficiência operacional.
        </p>

        <p className="destaque">
          Você foca no crescimento do seu negócio. Nós cuidamos da segurança,
          organização e performance do seu ambiente.
        </p>

        <div className="sobre-cards">
          <div
            className="card-mini"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
          >
            <i className="fas fa-user-shield"></i>
            Equipes treinadas
          </div>

          <div className="card-mini" 
          onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
          >
            <i className="fas fa-microchip"></i>
            Tecnologia de ponta
          </div>

          <div className="card-mini"
          onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
            }}
          >
            <i className="fas fa-chart-line"></i>
            Gestão eficiente
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
