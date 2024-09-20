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
            Hi, my name is Ryuki Koda, you can call me Nick, and I have been
            working in full-stack development with over 4 years of experience. I
            have worked with various industries, including advertisement,
            software, and finance. My frontend work involves using HTML, CSS3,
            JavaScript, and TypeScript, while my backend development utilizes
            Node.js, Express, and MySQL. I am capable of creating responsive,
            user-friendly interfaces with CSS preprocessors and utilizing
            libraries such as TailwindCSS, and Material UI, and I extend these
            capabilities to React frameworks with state management tools like
            Redux Toolkit. I have a strong understanding of implementing RESTful
            APIs, practicing TDD unit testing, and deploying applications on
            cloud platforms like AWS. Additionally, I have experience with
            GitHub for version control and various CI/CD tools to streamline
            development processes. Lastly, having worked in Agile/Scrum teams, I
            hope to continue to grow and improve within the team.
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
