import React from 'react'

function Contact() {
    return (
        <div className="container-fluid">
        <div id="work" className="card-header text-center"></div>
  
        <div className="row justify-content-center" id="contact">
  
            <div className="card text-center m-1">
              <div className = "card-body">
                <span title="Email">
                    <a href="mailto:seattlesally1@gmail.com" >
                        <i className="fas fa-envelope-square fa-5x">
                            </i>
                            </a>
                            </span>
                <br></br>Email
              </div>
            </div>
            <div className="card text-center m-1">
              <div className = "card-body">
                <span title="GitHub"><a href="https://github.com/SeattleSal/"
                  ><i className="fab fa-github-square fa-5x"></i></a></span>
                  <br></br>GitHub
              </div>
            </div>
          <div className="card text-center m-1">
            <div className = "card-body">
              <span title="Linked In"><a href="https://www.linkedin.com/in/sallyrperez/"
                ><i className="fab fa-linkedin-in fa-5x"></i></a></span>
                <br></br>
                LinkedIn
            </div>
          </div>
          <div className="card text-center m-1">
            <div className = "card-body">
              <span title="Resume"><a href="./assets/srp_resume.pdf"
                ><i className="fa fa-file fa-5x"></i></a></span>
                <br></br>
                Resume
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact
