import Grid from "@mui/material/Grid2";
import Profile from "./Profile";
import { useState } from "react";
import { Nav } from "../types/Utils";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  // ! 1. Navigation : About - Contact changes page fonts 
  // ! 2. Over 100vh has a horizontal scroll bar
  // ! 3. About icon is not aligned  
  const [navPage, setNavPage] = useState<Nav>("About");

  const pages = {
    About: <About navPage={navPage} setNavPage={setNavPage}/>,
    Resume: <Resume navPage={navPage} setNavPage={setNavPage}/>,
    Projects: <Projects navPage={navPage} setNavPage={setNavPage}/>,
    Contact: <Contact navPage={navPage} setNavPage={setNavPage}/>,
  };

  return (
    <Grid
      container
      width="100vw"
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
