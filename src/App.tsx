import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import DeviceContext from "./contexts/DeviceContext";
import Grid from "@mui/material/Grid2";
import backgroundImage from "./assets/background.png";

const pages = [
  {
    component: <Profile />,
  },
  {
    component: <About />,
  },
  {
    component: <Resume />,
  },
  {
    component: <Projects />,
  },
  {
    component: <Contact />,
  },
];

function App() {
  // TODO:
  // * 5. Fade in Text Animation
  // * 6. List Text instead of Block
  // * 7. Page Progress Bar

  const [, setPath] = useState(window.location.pathname);

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1080);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <DeviceContext.Provider value={isMobile}>
      <Router>
        {isMobile ? (
          <Grid
            container
            justifyContent="center"
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundColor: "var(--primary-color)",
            }}
          >
            <Grid container direction="column" maxWidth="526px">
              {pages.map((page, index) => (
                <Grid key={index}>
                  {page.component}
                  <hr
                    style={{
                      width: "90%",
                      border: "1px solid var(--tertiary-color)",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Navigate to="about" />} />
              <Route path="about" element={<About />} />
              <Route path="resume" element={<Resume />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Navigate to="about" />} />
          </Routes>
        )}
      </Router>
    </DeviceContext.Provider>
  );
}

export default App;
