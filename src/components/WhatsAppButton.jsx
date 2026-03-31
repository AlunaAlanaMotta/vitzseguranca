import "./styles/whatsapp.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5541995502824?text=Olá,%20gostaria%20de%20um%20orçamento"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
}

export default WhatsAppButton;
