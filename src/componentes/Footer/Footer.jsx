import { MdOutlineLocalShipping } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Córdoba Argentina</h4>
        <p>Envíos a todo el país</p>
        <div className="icon-shipping">
          <MdOutlineLocalShipping />
        </div>
        <div className="icon-row">
          <a href="mailto:tiendaastrea@gmail.com" className="icon-link">
            <CiMail />
          </a>
          <a
            href="https://wa.me/3516001250"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/amaracba"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
