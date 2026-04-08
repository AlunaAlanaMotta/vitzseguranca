import "./styles/footer.css";

const NAVIGATION_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

const CONTACT_INFO = [
  { type: "phone", href: "tel:+5541995502824", label: "(41) 99550-2824" },
  {
    type: "email",
    href: "mailto:grupovitz@gmail.com",
    label: "grupovitz@gmail.com",
  },
  { type: "location", label: "Curitiba - PR" },
];

const SOCIAL_LINKS = [
  {
    icon: "fab fa-instagram",
    href: "https://instagram.com/https://www.instagram.com/grupo.vitz?igsh=aTdkZHRmM25lOXl0",
    className: "instagram",
  },
  {
    icon: "fab fa-facebook-f",
    href: "https://facebook.com/https://www.facebook.com/grupovitz",
    className: "facebook",
  },
];

const ICONS = {
  phone: "📞",
  email: "📧",
  location: "📍",
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO + DESCRIÇÃO */}
        <div className="footer-col">
          <img
            src="/images/logo_vitz-2.png"
            alt="VITZ Segurança"
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
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO */}
        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            {CONTACT_INFO.map(({ href, label, type }) => {
              const content = (
                <>
                  <span className="icon">{ICONS[type]}</span>
                  {label}
                </>
              );

              return (
                <li key={label}>
                  {href ? <a href={href}>{content}</a> : <span>{content}</span>}
                </li>
              );
            })}
          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div className="footer-col">
          <h4>Siga-nos</h4>
          <div className="socials">
            {SOCIAL_LINKS.map(({ href, icon, className }) => (
              <a
                key={icon}
                href={href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* RODAPÉ FINAL */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} VITZ Segurança e Facilities — Todos os
        direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
