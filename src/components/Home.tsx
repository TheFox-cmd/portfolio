import Grid from "@mui/material/Grid2";
import Profile from "./Profile";
import { useState } from "react";
import { Nav } from "../types/Utils";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const [navPage, setNavPage] = useState<Nav>("About");

  const pages = {
    About: <About navPage={navPage} setNavPage={setNavPage} />,
    Resume: <Resume navPage={navPage} setNavPage={setNavPage} />,
    Projects: <Projects navPage={navPage} setNavPage={setNavPage} />,
    Contact: <Contact navPage={navPage} setNavPage={setNavPage} />,
  };

  return (
    <Grid
      container
      width="100%"
      minHeight="100vh"
      height="fit-content"
      gap="16px"
      padding="36px"
      justifyContent="center"
      sx={{
        background: "var(--primary-color)",
      }}
    >
      <Profile />
      {pages[navPage]}
    </Grid>
  );
};

export default Home;
