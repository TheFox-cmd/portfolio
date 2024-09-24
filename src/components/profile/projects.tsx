import "./projects.css";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-box project-gtfo">
        <div className="project-content">
          <a
            className="project-link"
            href="https://github.com/TheFox-cmd/GTFO_logTracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-title">GTFO Log Tracker</div>
          </a>
        </div>
      </div>
      <div className="project-box project-discordbot">
        <a
          className="project-link"
          href="https://github.com/TheFox-cmd/discord_mimCat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-title">Discord Bot mimCat</div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
