import { useState } from "react";
import "./styles/contact.css";

function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // VALIDAÇÃO
  const validate = (values) => {
    const newErrors = {};

    if (!values.nome.trim()) newErrors.nome = "Digite seu nome";

    if (!values.email.trim()) {
      newErrors.email = "Digite seu email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email inválido";
    }

    if (!values.mensagem.trim()) {
      newErrors.mensagem = "Digite sua mensagem";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = { ...form, [name]: value };
    setForm(updated);
    setErrors(validate(updated));
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({
      nome: true,
      email: true,
      mensagem: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      await fetch("https://formsubmit.co/mottaalana0@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      });

      setLoading(false);
      setSuccess(true);

      setForm({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });

      // volta ao normal depois de 3s
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      alert("Erro ao enviar 😢");
      setLoading(false);
    }
  };

  const getFieldClass = (field) => {
    if (!touched[field]) return "";
    return errors[field] ? "error" : "success";
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
          <form className="contato-form reveal" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* NOME */}
              <div className="input-group">
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass("nome")}
                />
                {touched.nome && errors.nome && (
                  <span className="error-text">{errors.nome}</span>
                )}
              </div>

              {/* EMAIL */}
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass("email")}
                />
                {touched.email && errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>

              {/* ASSUNTO */}
              <div className="input-group">
                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto"
                  value={form.assunto}
                  onChange={handleChange}
                />
              </div>

              {/* MENSAGEM */}
              <div className="input-group full">
                <textarea
                  name="mensagem"
                  placeholder="Sua mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass("mensagem")}
                ></textarea>

                {touched.mensagem && errors.mensagem && (
                  <span className="error-text">{errors.mensagem}</span>
                )}
              </div>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className={`btn-enviar ${loading ? "loading" : ""} ${success ? "success" : ""}`}
              disabled={loading}
            >
              <span className="btn-text">
                {success ? "✓ Mensagem enviada" : "Enviar mensagem"}
              </span>

              <span className="loader"></span>
            </button>
          </form>

          <div className="contato-info reveal">
            <p>Ou fale direto no WhatsApp:</p>

            <a
              href="https://wa.me/5541995502824"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
