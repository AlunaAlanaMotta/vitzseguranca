import { useEffect, useState } from "react";
import "../components/styles/scrollToTop.css";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // quando estiver perto do final (100px de margem)
      if (scrollTop + windowHeight >= docHeight - 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top ${show ? "show" : ""}`}
      onClick={scrollTop}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;
