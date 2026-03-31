import "./styles/services.css";

function Services() {
  return (
    <section id="servicos" className="servicos reveal">
      <h2 className="titulo">Nossos Serviços</h2>

      <div className="servicos-container">
        {/* CARD 1 */}
        <div className="servico-card">
          <img src="/images/portaria.png" alt="Portaria" />

          <div className="overlay">
            <span className="tag">Segurança</span>
            <h3>Portaria e Controle de Acesso</h3>
            <p>
              Controle total de acesso com segurança profissional e redução de
              riscos no seu patrimônio.
            </p>

            <a
              href="https://wa.me/5541995502824"
              className="btn-servico"
              target="_blank"
            >
              Falar com especialista
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="servico-card">
          <img src="/images/central.png" alt="Monitoramento" />

          <div className="overlay">
            <span className="tag">Monitoramento</span>
            <h3>Monitoramento 24h</h3>
            <p>
              Monitoramento 24h com resposta rápida para prevenir incidentes
              antes que aconteçam.
            </p>

            <a
              href="https://wa.me/5541995502824"
              className="btn-servico"
              target="_blank"
            >
              Falar com especialista
            </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="servico-card">
          <img src="/images/zeladoria.png" alt="Facilities" />

          <div className="overlay">
            <span className="tag">Zeladoria</span>
            <h3>Serviços de Facilities</h3>
            <p>
              Gestão completa do seu espaço com eficiência, organização e
              redução de custos.
            </p>

            <a
              href="https://wa.me/5541995502824"
              className="btn-servico"
              target="_blank"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
