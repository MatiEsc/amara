import { useState, useEffect } from "react";

import "./Principal.css";

const Principal = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="home" className="principal">
      {isMobile ? (
        <img src="/img/principal/heroMobile.png" alt="AMARA" />
      ) : (
        <img src="/img/principal/HeroDesktop.png" alt="AMARA" />
      )}
    </section>
  );
};

export default Principal;
