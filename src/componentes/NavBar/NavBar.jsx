import { useState, useEffect } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const toggleButton = document.getElementById("_toggle");
    const itemsContainer = document.getElementById("_items");

    const handleToggleClick = () => {
      itemsContainer.classList.toggle("open");
      toggleButton.classList.toggle("close");
    };

    toggleButton.addEventListener("click", handleToggleClick);

    return () => {
      toggleButton.removeEventListener("click", handleToggleClick);
    };
  }, []);

  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav id="navbar">
      <div className="logo-container">
        <img src="/img/navBar/logoNavDesk.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav_items" id="_items">
        <li>
          <a href="#home" onClick={(e) => handleClick(e, "home")}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#productos" onClick={(e) => handleClick(e, "productos")}>
            Productos
          </a>
        </li>
        <li>
          <a href="#servicios" onClick={(e) => handleClick(e, "servicios")}>
            Servicios
          </a>
        </li>
        <li>
          <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>
            Contacto
          </a>
        </li>
      </ul>

      <div className="nav_toggle" id="_toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
