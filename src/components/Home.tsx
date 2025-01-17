import Grid from "@mui/material/Grid2";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import backgroundImage from "../assets/background.png";

const Home = () => {
  return (
    <Grid
      container
      minHeight="100vh"
      height="fit-content"
      gap="16px"
      padding="36px"
      justifyContent="center"
      wrap="nowrap"
      sx={{
        background: "var(--primary-color)",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Profile />
      <Outlet />
    </Grid>
  );
};

export default Home;
