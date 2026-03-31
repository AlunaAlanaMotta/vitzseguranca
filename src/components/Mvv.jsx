import "./styles/mvv.css";

function MVV() {
  return (
    <section className="mvv reveal">
      <h2 className="titulo">Missão, Visão e Valores</h2>

      <div className="mvv-container">
        {/* MISSÃO */}
        <div className="mvv-card">
          <i className="fas fa-bullseye"></i>
          <h3>Missão</h3>
          <p>
            Garantir segurança e eficiência por meio de soluções tecnológicas e
            gestão estratégica.
          </p>
        </div>

        {/* VISÃO */}
        <div className="mvv-card">
          <i className="fas fa-eye"></i>
          <h3>Visão</h3>
          <p>
            Proteger pessoas e patrimônios com inteligência, tecnologia e
            processos eficientes, garantindo segurança real e operações sem
            falhas.
          </p>
        </div>

        {/* VALORES */}
        <div className="mvv-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Valores</h3>
          <p>
            Ética, compromisso com resultados, inovação contínua, excelência
            operacional e respeito absoluto aos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MVV;
