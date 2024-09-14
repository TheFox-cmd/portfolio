import "./profile.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="information">
        <div className="icon">&lt;/&gt;</div>
        <div className="name header">Ryuki Koda</div>
        <div className="connections">
          <a
            href="https://www.instagram.com/a.random.fox/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/TheFox-cmd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ryuki-koda-9b3a2b1b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="work">
        <div className="about">
          <div className="header">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="projects">
          <div className="header">Projects</div>
          <div className="text">
            <a
              href="https://github.com/TheFox-cmd/GTFO_logTracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              GTFO Log Tracker
            </a>
          </div>
          <div className="text">
            <a
              href="https://github.com/TheFox-cmd/discord_mimCat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord Bot MimCat
            </a>
          </div>
        </div>
        <div className="contacts">
          <div className="header">Contacts</div>
          <div className="text">rkoda997@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
