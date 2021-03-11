import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabContainer from "react-bootstrap/TabContainer";

import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function TabsComponent() {
  return (
    <TabContainer fluid="md">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="about" title="About">
          <About />
        </Tab>
        <Tab eventKey="portfolio" title="Portfolio">
          <Portfolio />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Contact />
        </Tab>
      </Tabs>
    </TabContainer>
  );
}

export default TabsComponent;
