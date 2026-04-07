import "./styles/mvv.css";

function MVV() {
  const items = [
    {
      icon: "fas fa-bullseye",
      title: "Missão",
      text: "Garantir segurança e eficiência por meio de soluções tecnológicas e gestão estratégica.",
    },
    {
      icon: "fas fa-eye",
      title: "Visão",
      text: "Proteger pessoas e patrimônios com inteligência, tecnologia e processos eficientes, garantindo segurança real e operações sem falhas.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Valores",
      text: "Ética, compromisso com resultados, inovação contínua, excelência operacional e respeito absoluto aos nossos clientes.",
    },
  ];

  return (
    <section className="mvv">
      <div className="container">
        <h2 className="titulo reveal">Missão, Visão e Valores</h2>

        <div className="mvv-container">
          {items.map((item, index) => (
            <div
              key={index}
              className="mvv-card reveal"
              style={{ "--delay": `${index * 0.2}s` }}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MVV;
