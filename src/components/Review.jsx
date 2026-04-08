import { useState, useEffect, useCallback } from "react";
import "./styles/review.css";

const clientes = [
  {
    nome: "Ana Costa",
    nota: 5,
    comentario:
      "Serviço impecável! Senti meu patrimônio seguro desde o primeiro dia.",
  },
  {
    nome: "Carlos Silva",
    nota: 4,
    comentario: "Equipe muito atenciosa e tecnologia de ponta. Recomendo!",
  },
  {
    nome: "Mariana Souza",
    nota: 5,
    comentario:
      "Monitoramento 24h que realmente funciona. Estou tranquila agora.",
  },
  {
    nome: "João Pereira",
    nota: 5,
    comentario: "Ótima experiência, atendimento excelente e rápido.",
  },
];

function Review() {
  const [current, setCurrent] = useState(0);
  const total = clientes.length;

  // próximo slide
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // slide anterior
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // autoplay estável (sem warning)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  // render estrelas
  const renderStars = (nota) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < nota ? "star filled" : "star"}>
        ★
      </span>
    ));

  return (
    <section className="avaliacoes">
      <div className="container">
        <h2 className="titulo reveal">O que nossos clientes dizem</h2>

        <p className="subtitulo reveal">
          Veja como ajudamos a proteger negócios e residências com excelência.
        </p>

        <div className="carousel">
          <button className="btn prev" onClick={prevSlide}>
            ‹
          </button>

          <div className="viewport">
            <div
              className="track"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {clientes.map((cliente, index) => (
                <div className="slide" key={index}>
                  <div
                    className="avaliacao-card reveal"
                    style={{ "--delay": `${index * 0.15}s` }}
                  >
                    <div className="avatar"></div>

                    <h3>{cliente.nome}</h3>

                    <div className="estrelas">{renderStars(cliente.nota)}</div>

                    <p>{cliente.comentario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="btn next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Review;
