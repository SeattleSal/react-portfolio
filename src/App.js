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
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
