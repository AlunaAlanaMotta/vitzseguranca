import "./styles/differentials.css";

function Differentials() {
  return (
    <section className="diferenciais reveal">
      {/* VÍDEO */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/images/central.mp4" type="video/mp4" />
      </video>

      {/* CONTEÚDO */}
      <div className="diferenciais-wrapper">
        <div className="diferenciais-content">
          <h2 className="titulo">Nossos Diferenciais</h2>

          <div className="diferenciais-container">
            <div className="diferencial-item">
              <i className="fas fa-shield-alt"></i>
              <h3>Equipe altamente treinada</h3>
              <p>
                Profissionais altamente treinados para garantir segurança real
                no seu dia a dia.
              </p>
            </div>

            <div className="diferencial-item">
              <i className="fas fa-microchip"></i>
              <h3>Tecnologia de ponta</h3>
              <p>
                Tecnologia avançada para monitoramento inteligente e resposta
                rápida.
              </p>
            </div>

            <div className="diferencial-item">
              <i className="fas fa-clock"></i>
              <h3>Monitoramento 24h</h3>
              <p>Proteção contínua com monitoramento 24h sem falhas.</p>
            </div>

            <div className="diferencial-item">
              <i className="fas fa-users"></i>
              <h3>Atendimento personalizado</h3>
              <p>Soluções sob medida para o seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Differentials;
