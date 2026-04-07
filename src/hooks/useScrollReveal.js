import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll(".reveal");

      elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default useScrollReveal;
