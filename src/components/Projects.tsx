import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import gtfoBg from "../assets/gtfo_bg.jpg";
import mimcatBg from "../assets/discord_bg.jpg";
import omnifood from "../assets/omnifood.jpg";
import tmdb_logo from "../assets/tmdb.jpg";
import { Box } from "@mui/material";
import MUILink from "@mui/material/Link";
import Navigation from "./Navigation";
import { useContext } from "react";
import DeviceContext from "../contexts/DeviceContext";

const projects = [
  {
    link: "http://gtfo.thefox-cmd.com",
    image: gtfoBg,
    title: "GTFO Log Tracker",
  },
  {
    link: "https://github.com/TheFox-cmd/discord_mimCat",
    image: mimcatBg,
    title: "Discord Bot - MimCat",
  },
  {
    link: "https://glittering-unicorn-c87859.netlify.app",
    image: omnifood,
    title: "Omnifood Landing Page",
  },
  {
    link: "https://mellifluous-belekoy-c5d336.netlify.app",
    image: tmdb_logo,
    title: "TMDB Movie App",
  },
];

const Projects: React.FC = () => {
  const isMobile = useContext(DeviceContext);
  return (
    <Grid
      container
      direction="column"
      marginTop={!isMobile ? "70px" : "0"}
      padding={!isMobile ? "36px 12px" : "12px 16px"}
      gap="16px"
      width={!isMobile ? "1024px" : "100%"}
      height="fit-content"
      borderRadius={!isMobile ? "12px" : "0"}
      border={!isMobile ? "2px solid var(--tertiary-color)" : "none"}
      sx={{
        background: "var(--secondary-color)",
      }}
      position="relative"
    >
      <Navigation />
      <Grid container direction="column" gap="16px">
        <Typography
          variant="h5"
          fontWeight="bold"
          lineHeight="24px"
          color="white"
        >
          Projects
        </Typography>
        <hr
          style={{
            width: "60px",
            border: "3px solid var(--contrast-color)",
            marginLeft: 0,
          }}
        />
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid size={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  color: "var(--quinary-color)",
                  bgcolor: "var(--secondary-color)",
                  border: "2px solid var(--tertiary-color)",
                  borderRadius: "12px",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "var(--tertiary-color)",
                    color: "var(--contrast-color)",
                  },
                }}
              >
                <MUILink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="inherit"
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 70 }}
                      image={project.image}
                      title="GTFO Background"
                    />
                    <CardContent
                      sx={{ height: 40, padding: "12px", lineHeight: 1 }}
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                        textAlign="center"
                        width="100%"
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                            maxWidth: "100%",
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </MUILink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
