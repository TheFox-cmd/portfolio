import "./profile.css";
import { Link } from "react-router-dom";
import Projects from "./projects";
import foxImage from "../../assets/fox.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="information-container">
        <div className="information-box">
          <div className="avatar">
            <img src={foxImage} alt="fox image icon" />
          </div>
          <div className="name">Ryuki Koda</div>
          <div className="connections">
            <a
              href="https://www.instagram.com/a.random.fox/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://github.com/TheFox-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="www.linkedin.com/in/ryuki-koda"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="work-container">
        <div className="about">
          <div className="h-text">About</div>
          <br />
          <div className="p-text">
            Hey there! I’m Ryuki, a full-stack developer by day and a
            storyteller by heart. I love crafting digital experiences that blend
            code with creativity. Whether I’m building seamless interfaces or
            diving deep into backend logic, I’m all about turning complex
            problems into beautifully designed solutions. When I’m not coding,
            you’ll find me behind a camera capturing the world’s aesthetic
            moments, lost in a game with an epic storyline, or dreaming up new
            game designs that blend my passion for tech, art, and storytelling.
            For me, every line of code is a like a little bit of magic to create
            something new and exciting!
          </div>
        </div>
        <br />
        <div className="projects">
          <div className="h-text">Projects</div>
          <Projects />
        </div>
        <div className="reserve"></div>
        <div className="contacts">
          <Link to="/contacts">
            <button className="contact-button">Contacts</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
