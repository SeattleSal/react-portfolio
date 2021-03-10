import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div>
      <Header />
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            About me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <About />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Portfolio
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Portfolio />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Contact
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Contact />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
      <Footer />
    </div>
  );
}

export default App;
