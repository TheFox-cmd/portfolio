import Grid from "@mui/material/Grid2";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Grid
      container
      // width="100%"
      minHeight="100vh"
      height="fit-content"
      gap="16px"
      padding="36px"
      justifyContent="center"
      wrap="nowrap"
      sx={{
        background: "var(--primary-color)",
      }}
    >
      <Profile />
      <Outlet />
    </Grid>
  );
};

export default Home;
