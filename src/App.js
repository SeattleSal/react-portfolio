import "./App.css";
import Header from "./components/Header";
// import TabsComponent from "./components/TabsComponent";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MenuBars from "./components/MenuBars";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <TabsComponent /> */}
        {/* <MenuBars /> */}
        {/* <Header /> */}
        <NavMenu />
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
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
