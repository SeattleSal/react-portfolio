import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function MenuBars() {
  return (
    <Menu isOpen >
      <Link id="home" className="menu-item" to="/about">
        About
      </Link>
      <Link id="about" className="menu-item" to="/portfolio">
        Portfolio
      </Link>
      <Link id="contact" className="menu-item" to="/contact">
        Contact
      </Link>
    </Menu>
  );
}

export default MenuBars;
