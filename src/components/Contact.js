import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container fluid style={{marginTop: "1rem"}} >
      <Card >
        <Card.Body style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
              <a href="mailto:seattlesally1@gmail.com">
                <i className="fas fa-envelope-square fa-5x"></i>
              </a>
              <a href="https://github.com/SeattleSal/">
                <i className="fab fa-github-square fa-5x"></i>
              </a>
              <a href="https://www.linkedin.com/in/sallyrperez/">
                <i className="fab fa-linkedin-in fa-5x"></i>
              </a>
              <a href="./assets/srp_resume.pdf">
                <i className="fa fa-file fa-5x"></i>
              </a>
        </Card.Body>
      </Card>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            <span title="GitHub">
              <a href="https://github.com/SeattleSal/">
                <i className="fab fa-github-square fa-5x"></i>
              </a>
            </span>
            <br></br>GitHub
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            <span title="Linked In">
              <a href="https://www.linkedin.com/in/sallyrperez/">
                <i className="fab fa-linkedin-in fa-5x"></i>
              </a>
            </span>
            <br></br>
            LinkedIn
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            <span title="Resume">
              <a href="./assets/srp_resume.pdf">
                <i className="fa fa-file fa-5x"></i>
              </a>
            </span>
            <br></br>
            Resume
          </Card.Text>
        </Card.Body>
      </Card> */}
    </Container>
  );
}

export default Contact;
