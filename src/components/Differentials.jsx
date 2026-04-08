import "./styles/differentials.css";

function Differentials() {
  const items = [
    {
      icon: "fas fa-shield-alt",
      title: "Equipe altamente treinada",
      text: "Profissionais altamente treinados para garantir segurança real no seu dia a dia.",
    },
    {
      icon: "fas fa-microchip",
      title: "Tecnologia de ponta",
      text: "Tecnologia avançada para monitoramento inteligente e resposta rápida.",
    },
    {
      icon: "fas fa-clock",
      title: "Monitoramento 24h",
      text: "Proteção contínua com monitoramento 24h sem falhas.",
    },
    {
      icon: "fas fa-users",
      title: "Atendimento personalizado",
      text: "Soluções sob medida para o seu negócio.",
    },
  ];

  return (
    <section className="diferenciais">
      {/* VÍDEO */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/images/central.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <div className="diferenciais-content">
          <h2 className="titulo reveal">Nossos Diferenciais</h2>

          <div className="diferenciais-container">
            {items.map((item, index) => (
              <div
                key={index}
                className="diferencial-item reveal"
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Differentials;
