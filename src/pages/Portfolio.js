import Container from "react-bootstrap/Container";
import burger from "../assets/burger.jpg";
import feast from "../assets/feast.JPG";
import trail from "../assets/trail.jpg";
import weather from "../assets/weather.jpg";
import yellowBrick from "../assets/yellowBrick.jpg";
import employee from "../assets/employee.JPG";
import cuposugar from "../assets/cuposugar.JPG";
import booksearch from "../assets/booksearch.JPG";
import "../style.css";

function Portfolio() {
  const projects = [
    {
      name: "Neighborhood Cup O Sugar",
      description:
        "Hyperlocal neighborhood experience that allows users to promote a friendly environment and share free items within their community. (Team Project)",
      technologies:
        "JavaScript, Node, Express, Axios, bcrypt, passport, mongoose, multer, react, bootstrap, react-bootstrap, Cloudinary 3P API",
      gitHubLink: "https://github.com/bfourGitHub/cup-o-sugar",
      liveLink: "https://neighborhood-cup-o-sugar.herokuapp.com/",
      imgURL: cuposugar,
    },
    {
      name: "Feast with Friends",
      description:
        "Find restaurants that meet your dietary needs. (Team Project)",
      technologies: "JavaScript, Express, Handlebars, Bootstrap",
      gitHubLink: "https://github.com/SeattleSal/feast-with-friends",
      liveLink: "https://feast-with-friends-plus.herokuapp.com/",
      imgURL: feast,
    },
    {
      name: "Trail Chasers",
      description:
        "Find hikes based on location, length and difficulty. (Team Project)",
      technologies: "JavaScript, Bluma",
      gitHubLink: "https://github.com/TaaniBravo/Trail-Chaser-Hiking-App",
      liveLink: "https://taanibravo.github.io/Trail-Chaser-Hiking-App/",
      imgURL: trail,
    },
    {
      name: "My Google Books",
      description: "Search for books by title and save your favorites.",
      technologies:
        "Javascript, React, Mongoose, Bootstrap, Google Books 3P API",
      gitHubLink: "https://github.com/SeattleSal/google-books-react",
      liveLink: "https://seattlesal-google-books.herokuapp.com/",
      imgURL: booksearch,
    },
    {
      name: "Employee Directory",
      description:
        "React App showing random employees with ability to sort and search.",
      technologies: "JavaScript, React, Bootstrap",
      gitHubLink: "https://github.com/SeattleSal/employee-directory-react",
      liveLink: "https://seattlesal-employee-directory.herokuapp.com/",
      imgURL: employee,
    },
    {
      name: "Weather Dashboard",
      description: "Look up weather for location and see 5 days of weather.",
      technologies: "JavaScript,CSS",
      gitHubLink: "https://github.com/SeattleSal/weather_dashboard",
      liveLink: "https://seattlesal.github.io/weather_dashboard/",
      imgURL: weather,
    },
  ];

  return (
    <Container style={{ display: "flex", flexWrap: "wrap" }}>
      {projects.map((project, index) => (
        <div className="card col-md-5" key={index} style={{ margin: "1rem" }}>
          <div className="card-body rounded">
            <h3>{project.name}</h3>
            <img
              src={project.imgURL}
              className="card-img-top rounded"
              alt="meal"
            />
            <p className="card-text">{project.description} </p>
            <p className="card-text">Technologies: {project.technologies} </p>
            <a href={project.gitHubLink} className="btn btn-primary">
              GitHub
            </a>
            <a href={project.liveLink} className="btn btn-primary">
              Live
            </a>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Portfolio;
