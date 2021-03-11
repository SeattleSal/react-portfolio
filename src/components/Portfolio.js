import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import burger from "../assets/burger.jpg";
import feast from "../assets/feast.JPG";
import trail from "../assets/trail.jpg";
import weather from "../assets/weather.jpg";
import yellowBrick from "../assets/yellowBrick.jpg";

function Portfolio() {
  return (
    <Container>
      <section className="container-fluid">
        <div className="card col-md-6 mt-1">
          <div className="card-body rounded">
            <img
              src={feast}
              className="card-img-top rounded"
              alt="meal"
            />
            <h3 className="card-text">Feast with Friends</h3>
            <p className="card-text">
              JavaScript/Express/Handlebars/Bootstrap <br />
              (Team Project)
            </p>
            <a
              href="https://github.com/laurenb08/feastWithFriends/"
              className="btn btn-primary"
            >
              GitHub
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://feastwithfriendsproject.herokuapp.com/"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </div>

        <div className="card col-md-6 mt-1">
          <div className="card-body rounded">
            <img
              src={trail}
              className="card-img-top rounded"
              alt="..."
            />
            <h3 className="card-text">Trail Chasers</h3>
            <p className="card-text">
              JavaScript/Bulma <br />
              (Team Project)
            </p>
            <a
              href="https://github.com/TaaniBravo/Trail-Chaser-Hiking-App"
              className="btn btn-primary"
            >
              GitHub
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://taanibravo.github.io/Trail-Chaser-Hiking-App/"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </div>

        <div className="card col-md-6 mt-1">
          <div className="card-body rounded">
            <img
              src="https://placekitten.com/300/200"
              className="card-img-top rounded"
              alt="..."
            />
            <h3 className="card-text">Employee Directory</h3>
            <p className="card-text">JavaScript/React/Bootstrap</p>
            <a
              href="https://github.com/SeattleSal/employee-directory-react"
              className="btn btn-primary"
            >
              GitHub
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://seattlesal-employee-directory.herokuapp.com/"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </div>

        <div className="card col-md-6 mt-1">
          <div className="card-body rounded">
            <img
              src={burger}
              className="card-img-top rounded"
              alt="..."
            />
            <h3 className="card-text">Burgers App</h3>
            <p className="card-text">JavaScript/Express/Handlebars/Bootstrap</p>
            <a
              href="https://github.com/SeattleSal/burger"
              className="btn btn-primary"
            >
              GitHub
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://seattlesal-burgers.herokuapp.com/"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </div>

        <div className="card col-md-6 mt-1">
          <div className="card-body rounded">
            <img
              src={weather}
              className="card-img-top rounded"
              alt="weather"
            />
            <h3 className="card-text">Weather Dashboard</h3>
            <p className="card-text">JavaScript/CSS</p>
            <a
              href="https://github.com/SeattleSal/weather_dashboard"
              className="btn btn-primary"
            >
              GitHub
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://seattlesal.github.io/weather_dashboard/"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </div>

        <div className="card col-md-6 mt-1">
          <div className="card-body rounded">
            <img
              src={yellowBrick}
              className="card-img-top rounded"
              alt="yello brick road"
            />
            <h3 className="card-text">Wizard of Oz Quiz</h3>
            <p className="card-text">JavaScript/CSS</p>
            <a
              href="https://github.com/SeattleSal/code-quiz"
              className="btn btn-primary"
            >
              GitHub
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://seattlesal.github.io/code-quiz/"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Portfolio;
