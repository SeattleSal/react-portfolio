import React from "react";
import profilePic from "../assets/sally.jpg";

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
            <p className="mt-1">
            Full Stack Developer with strong problem solving mindset and a passion to continuously learn. Recently completed a Certificate in Full Stack Web Development from the University of Washington and have skills in JavaScript, React, Mongoose, MySQL, HTML and CSS. I also have a degree in Computer Science. My experience as a Technology Auditor showcases my ability to continuously learn and apply critical thinking to new areas of Technology and processes. I’m excited to move beyond the focus on analysis to creating valuable solutions through team collaboration and problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
