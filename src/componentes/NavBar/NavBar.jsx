import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

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

  return (
    <nav id="navbar">
      <Link to="/" className="brand">
        <img src="" alt="" />
      </Link>
      <ul className="nav_items" id="_items">
        <li>
          <Link to=""></Link>
        </li>
        <li>
          <Link to=""></Link>
        </li>
        <li>
          <Link to=""></Link>
        </li>
        <li>
          <Link to=""> </Link>
        </li>
        <li>
          <Link to=""> </Link>
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
