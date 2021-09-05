import React from "react";
// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import MenuBars from "./MenuBars";
import profilePic from "../assets/sally.jpg";

function Header() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar className="color-nav">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={profilePic}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Sally Perez
        <MenuBars />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
