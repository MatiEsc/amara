import "./NavBar.css";

const NavBar = () => {
  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header id="home" className="header">
      <div className="logo-container">
        <img src="/public/img/navBar/logoNavDesk.png" alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
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
      </nav>
    </header>
  );
};

export default NavBar;
