import React from "react";
import profilePic from "../assets/sally.jpg";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="container-fluid">
      <div id="work" className="card-header text-center"></div>

      <div className="media-body">
        <div className="col mt-1 justify-content-center" id="about">
          <img
            src={profilePic}
            className="profile mr-2 m-4 mx-auto d-block"
            alt="sally"
          />
          <div className="container">
            <p className="mt-1" style={{fontSize: 20}}>
            Full Stack Developer with strong problem solving mindset and a passion to continuously learn. Recently completed a Certificate in Full Stack Web Development from the University of Washington and have skills in JavaScript, React, Mongoose, MySQL, HTML and CSS. I also have a degree in Computer Science. My experience as a Technology Auditor showcases my ability to continuously learn and apply critical thinking to new areas of Technology and processes. I’m excited to move beyond the focus on analysis to creating valuable solutions through team collaboration and problem solving.
            </p>
          </div>
        </div>
      </div>

      <Card className="container">
        <Card.Header className="d-flex justify-content-center" >
          <div>
          &lt; Skills  /&gt;
          </div>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center row">
        <i className="fab fa-js-square fa-7x m-3" style={{color: "yellow", backgroundColor: "black"}}></i>
        <i className="fab fa-react fa-7x m-3" style={{color: "#61DBFB", backgroundColor: "black"}}></i>
        <i className="fab fa-html5 fa-7x m-3" style={{color: "#e34c26"}}></i>
        <i className="fab fa-css3-alt fa-7x m-3" style={{color: "#264de4"}}></i>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
