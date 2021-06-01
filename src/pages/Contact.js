// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import resume from "../assets/srp_resume.pdf";


function Contact() {
  return (
    <Container fluid style={{ marginTop: "1rem" }}>
      <Col className="ml-10">
        <Row style={{ margin: "1rem" }} >
          <a href="mailto:seattlesally1@gmail.com">
            <h4>
              <i className="fas fa-envelope-square fa-3x mr-4"></i>
              seattlesally1@gmail.com
            </h4>
          </a>
        </Row>
        <Row style={{ margin: "1rem" }} >
          <a href="https://github.com/SeattleSal/">
            <h4>
              <i className="fab fa-github-square fa-3x mr-4"></i>/SeattleSal
            </h4>
          </a>
        </Row>
        <Row style={{ margin: "1rem" }} >
          <a href="https://www.linkedin.com/in/sallyrperez/">
            <h4>
              <i className="fab fa-linkedin-in fa-3x mr-4"></i>/sallyrperez/
            </h4>
          </a>
        </Row>
        <Row style={{ margin: "1rem" }} >
          <a href={resume} download>
            <h4>
              <i className="fa fa-file fa-3x mr-4"></i>Download Resume
            </h4>
          </a>
        </Row>
      </Col>
    </Container>
  );
}

export default Contact;
