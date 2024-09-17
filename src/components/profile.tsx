import "./profile.css";
import Projects from "./projects";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="information-container">
        <div className="information-box">
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
              href="https://www.linkedin.com/in/ryuki-koda-9b3a2b1b3/"
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
          <div className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <br />
        <div className="projects">
          <div className="h-text">Projects</div>
          <Projects />
        </div>
        <div className="reserve"></div>
        <div className="contacts">
          <div className="h-text">Contacts</div>
          <div className="p-text">rkoda997@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
