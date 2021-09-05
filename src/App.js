import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NavMenu from "./components/NavMenu";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Container>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={About} /> 
          </Switch>
        </Container>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
