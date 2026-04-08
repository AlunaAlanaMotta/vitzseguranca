import "./styles/services.css";

function Services() {
  const services = [
    {
      img: "/images/portaria.png",
      tag: "Segurança",
      title: "Portaria e Controle de Acesso",
      desc: "Controle total de acesso com segurança profissional e redução de riscos no seu patrimônio.",
    },
    {
      img: "/images/central.png",
      tag: "Monitoramento",
      title: "Monitoramento 24h",
      desc: "Monitoramento 24h com resposta rápida para prevenir incidentes antes que aconteçam.",
    },
    {
      img: "/images/zeladoria.png",
      tag: "Zeladoria",
      title: "Serviços de Facilities",
      desc: "Gestão completa do seu espaço com eficiência, organização e redução de custos.",
    },
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <h2 className="titulo reveal">Nossos Serviços</h2>

        <div className="servicos-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="servico-card reveal"
              style={{ "--delay": `${index * 0.2}s` }}
            >
              <img src={service.img} alt={service.title} />

              <div className="overlay">
                <span className="tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <a
                  href="https://wa.me/5541995502824"
                  className="btn-servico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com especialista
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
