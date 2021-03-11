import React from 'react'

function About() {
    return (
        <div className="container-fluid">
        <div id="work" className="card-header text-center"></div>

        <div className="media-body">
          <div className="col mt-1 justify-content-center" id="about">
            <img
              src={process.env.PUBLIC_URL + '/logo192.png'}
              className="profile mr-2 m-4 mx-auto d-block"
              alt="sally"
            />
            <div className = "container">
              <p className="mt-1">
                Web developer with strong problem solving mindset and passion to
                continuously learn new skills. 
              </p>
              <p className="mt-1">
                Recently completed a Certificate in
                Full Stack Web Development from the University of Washington.
              </p>
              <p className="mt-1">
                Skills include JavaScript, HTML5, CSS, NodeJS, SQL, ReactJS.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About
