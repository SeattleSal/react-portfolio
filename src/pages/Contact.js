// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid style={{ marginTop: "1rem" }}>
      {/* <Card>
        <Card.Body
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        > */}
      <Row
        style={{ margin: "1rem" }}
        xs={2}
        md={4}
        lg={6}
        className="justify-content-md-center"
      >
        <a href="mailto:seattlesally1@gmail.com">
          <i className="fas fa-envelope-square fa-5x"></i>
          <p>seattlesally1@gmail.com</p>
        </a>
        <a href="https://github.com/SeattleSal/">
          <i className="fab fa-github-square fa-5x"></i>
        </a>
      </Row>
      <Row
        style={{ margin: "1rem" }}
        xs={2}
        md={4}
        lg={6}
        className="justify-content-md-center"
      >
        <a href="https://www.linkedin.com/in/sallyrperez/">
          <i className="fab fa-linkedin-in fa-5x"></i>
        </a>
        <a href="./assets/srp_resume.pdf">
          <i className="fa fa-file fa-5x"></i>
        </a>
      </Row>
    </Container>
  );
}

export default Contact;
