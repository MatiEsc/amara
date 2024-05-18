import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Tel: +1 234 567 890</p>
          <p>Email: contacto@tienda-amara.com</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">
              Facebook
            </a>
            <a href="https://twitter.com" className="social-icon">
              Twitter
            </a>
            <a href="https://instagram.com" className="social-icon">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2023 Tienda Amara. Todos los derechos reservados.</div>
    </footer>
  );
};

export default Footer;
