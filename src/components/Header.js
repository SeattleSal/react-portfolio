import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";

function Header() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Sally Perez</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Header;
