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
              Web developer with strong problem solving mindset and passion to
              continuously learn new skills. Recently completed a Certificate in
              Full Stack Web Development from the University of Washington.
            </p>
            <p className="mt-1">
              Skills include JavaScript, ReactJS, jQuery, NodeJS, mySQL,
              Mongoose, HTML5, CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
