import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/public/img/navBar/logoNavDesk.png" alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#productos">Productos</a>
          </li>
          <li>
            <a href="#servico">Servicios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
