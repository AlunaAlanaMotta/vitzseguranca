import { useState } from "react";
import "./styles/contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      form.reset();
      setShowPopup(true);
    } catch {
      alert("Erro ao enviar 😢");
    }

    setLoading(false);
  };

  return (
    <section id="contato" className="contato reveal">
      <h2 className="titulo">Fale Conosco</h2>

      <p>
        Solicite um orçamento agora e descubra como podemos proteger seu
        patrimônio.
      </p>

      <div className="contato-wrapper">
        {/* FORM */}
        <form
          className="contato-form"
          action="https://formsubmit.co/grupovitz@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-grid">
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu email" required />
            <input type="text" name="assunto" placeholder="Assunto" />

            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>

        {/* CONTATO RÁPIDO */}
        <div className="contato-info">
          <p>Ou fale direto no WhatsApp:</p>

          <a href="https://wa.me/5541995502824" className="btn" target="_blank">
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Mensagem enviada! 🎉</h3>
            <p>Entraremos em contato em breve.</p>

            <button onClick={() => setShowPopup(false)}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
