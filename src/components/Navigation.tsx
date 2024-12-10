import Grid from "@mui/material/Grid2";
import { ReactSetState, Nav } from "../types/Utils";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface NavigationProps {
  navPage: Nav;
  setNavPage: ReactSetState<Nav>;
}

const Navigation: React.FC<NavigationProps> = ({ navPage, setNavPage }) => {
  return (
    <Grid
      container
      gap="48px"
      borderRadius="0 12px"
      padding="12px 24px"
      color="var(--quaternary-color)"
      sx={{ backgroundColor: "var(--tertiary-color)" }}
      position="absolute"
      top="0"
      right="0"
    >
      <Button
        variant="text"
        color="inherit"
        onClick={() => setNavPage("About")}
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: navPage === "About" ? "80%" : "0%",
            height: "2px",
            backgroundColor: "var(--contrast-color)",
            transition: "all 0.3s ease",
            transform: "translateX(-50%)",
          },
          "&:hover::after": {
            width: "80%",
          },
        }}
      >
        <Typography>About</Typography>
      </Button>
      <Button
        variant="text"
        color="inherit"
        onClick={() => setNavPage("Resume")}
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: navPage === "Resume" ? "80%" : "0%",
            height: "2px",
            backgroundColor: "var(--contrast-color)",
            transition: "all 0.3s ease",
            transform: "translateX(-50%)",
          },
          "&:hover::after": {
            width: "80%",
          },
        }}
      >
        <Typography>Resume</Typography>
      </Button>
      <Button
        variant="text"
        color="inherit"
        onClick={() => setNavPage("Projects")}
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: navPage === "Projects" ? "80%" : "0%",
            height: "2px",
            backgroundColor: "var(--contrast-color)",
            transition: "all 0.3s ease",
            transform: "translateX(-50%)",
          },
          "&:hover::after": {
            width: "80%",
          },
        }}
      >
        <Typography>Projects</Typography>
      </Button>
      <Button
        variant="text"
        color="inherit"
        onClick={() => setNavPage("Contact")}
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: navPage === "Contact" ? "80%" : "0%",
            height: "2px",
            backgroundColor: "var(--contrast-color)",
            transition: "all 0.3s ease",
            transform: "translateX(-50%)",
          },
          "&:hover::after": {
            width: "80%",
          },
        }}
      >
        <Typography fontWeight="normal">Contact</Typography>
      </Button>
    </Grid>
  );
};

export default Navigation;
