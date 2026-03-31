import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO */}
        <div className="footer-col">
          <img
            src="/images/logo_vitz-2.png"
            alt="VITZ"
            className="footer-logo"
          />

          <p>
            Protegemos o que é importante para você com tecnologia, estratégia e
            excelência operacional.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        {/* CONTATO */}
        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li>
              <a href="tel:+5541995502824">📞 (41) 99550-2824</a>
            </li>
            <li>
              <a href="mailto:grupovitz@gmail.com">📧 grupovitz@gmail.com</a>
            </li>
            <li>📍 Curitiba - PR</li>
          </ul>
        </div>

        {/* REDES */}
        <div className="footer-col">
          <h4>Siga-nos</h4>

          <div className="socials">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* LINHA FINAL */}
      <div className="footer-bottom">
        © 2026 VITZ Segurança e Facilities — Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
