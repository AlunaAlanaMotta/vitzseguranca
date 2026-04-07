import { useEffect, useState } from "react";

function useScrollVisibility(threshold = 50) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY < threshold);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
}

export default useScrollVisibility;
