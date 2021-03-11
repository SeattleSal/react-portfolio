import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/NavBar";

function Header() {
  return (
    <Jumbotron>
      <Container>
        <h1>Sally Perez</h1>
        <p>Full Stack Web Developer</p>
      </Container>
    </Jumbotron>
  );
}

export default Header;
