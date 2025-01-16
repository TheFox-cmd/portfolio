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
  // * 1. Global Phone Padding when Portrait Mode
  // * 2. Responsive window size
  // * 3. Fix Project Width
  // * 4. Add Background
  // * 5. Fade in Text Animation

  const [, setPath] = useState(window.location.pathname);

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

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
          <Grid container direction="column" width="100vw">
            {pages.map((page, index) => (
              <Grid
                key={index}
                sx={{
                  backgroundColor: "var(--secondary-color)",
                }}
              >
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
