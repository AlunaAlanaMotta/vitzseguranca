import { useState } from "react";
import "./styles/contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const fields = [
    { type: "text", name: "nome", placeholder: "Seu nome", required: true },
    { type: "email", name: "email", placeholder: "Seu email", required: true },
    { type: "text", name: "assunto", placeholder: "Assunto" },
  ];

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
    <section id="contato" className="contato">
      <div className="container">
        <h2 className="titulo reveal">Fale Conosco</h2>

        <p className="reveal">
          Solicite um orçamento agora e descubra como podemos proteger seu
          patrimônio.
        </p>

        <div className="contato-wrapper">
          {/* FORM */}
          <form
            className="contato-form reveal"
            action="https://formsubmit.co/mottaalana0@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-grid">
              {fields.map((field, index) => (
                <input key={index} {...field} />
              ))}

              <textarea
                name="mensagem"
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              {loading ? <span className="loader"></span> : "Enviar mensagem"}
            </button>
          </form>

          {/* CONTATO */}
          <div className="contato-info reveal">
            <p>Ou fale direto no WhatsApp:</p>

            <a
              href="https://wa.me/5541995502824"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup ativo">
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
