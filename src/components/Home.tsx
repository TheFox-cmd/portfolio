import Grid from "@mui/material/Grid2";
import Profile from "./Profile";
import About from "./About";

const Home = () => {
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
      <About />
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
