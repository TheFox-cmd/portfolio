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
    About: <About setNavPage={setNavPage} />,
    Resume: <Resume />,
    Projects: <Projects />,
    Contact: <Contact />,
  }

  return (
    <Grid
      container
      width="100vw"
      height="100vh"
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

{
  /* <Grid container marginBottom="16px" justifyContent="flex-end">
  <Button
    component={Link}
    to="/contacts"
    variant="contained"
    endIcon={<InboxIcon />}
    sx={{ bgcolor: "#0A2E5C" }}
  >
    Contact Me
  </Button>
</Grid>; */
}
