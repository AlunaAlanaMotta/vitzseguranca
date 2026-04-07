import "./styles/navbar.css";
import useNavbarScroll from "../hooks/useNavbarScroll";
import useMenu from "../hooks/useMenu";

function Navbar() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const scrolled = useNavbarScroll();

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <img src="/images/logo_vitz-2.png" className="logo" />

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>
            {" "}
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>{" "}
          </li>
          <li>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {menuOpen && <div className="menu-overlay active" onClick={closeMenu} />}
    </>
  );
}

export default Navbar;
