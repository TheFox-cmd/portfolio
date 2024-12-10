import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import Navigation from "./Navigation";
import { ReactSetState, Nav } from "../types/Utils";

interface AboutProps {
  navPage: Nav;
  setNavPage: ReactSetState<Nav>;
}

const About: React.FC<AboutProps> = ({ navPage, setNavPage }) => {
  return (
    <Grid
      container
      direction="column"
      marginTop="70px"
      padding="36px 16px"
      gap="16px"
      width="1024px"
      height="fit-content"
      borderRadius="12px"
      sx={{
        background: "var(--secondary-color)",
        border: "2px solid var(--tertiary-color)",
        boxSizing: "border-box",
      }}
      position="relative"
    >
      <Navigation navPage={navPage} setNavPage={setNavPage} />
      <Grid container direction="column" gap="16px">
        <Typography
          variant="h5"
          fontWeight="bold"
          lineHeight="24px"
          color="white"
        >
          About Me
        </Typography>
        <hr
          style={{
            width: "60px",
            border: "3px solid var(--contrast-color)",
          }}
        />
        <Typography variant="body1" lineHeight="24px" color="white">
          Hey there! I’m Ryuki, a full-stack developer by day and a storyteller
          by heart. I love crafting digital experiences that blend code with
          creativity. Whether I’m building seamless interfaces or diving deep
          into backend logic, I’m all about turning complex problems into
          beautifully designed solutions.
        </Typography>
        <Typography variant="body1" lineHeight="24px" color="white">
          When I’m not coding, you’ll find me behind a camera capturing the
          world’s aesthetic moments, lost in a game with an epic storyline, or
          dreaming up new game designs that blend my passion for tech, art, and
          storytelling. For me, every line of code is a like a little bit of
          magic to create something new and exciting!
        </Typography>
      </Grid>
      <Grid container direction="column" gap="16px">
        <Typography
          variant="h5"
          fontWeight="bold"
          lineHeight="24px"
          color="white"
        >
          My Work
        </Typography>
        <Grid container spacing={2}>
          <Grid
            container
            border="1px solid var(--tertiary-color)"
            padding="20px"
            borderRadius="12px"
            size={6}
          >
            <DevicesOutlinedIcon
              sx={{
                color: "var(--contrast-color)",
                marginRight: "12px",
                fontSize: "24px",
              }}
            />
            <Grid container direction="column" gap="4px">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "var(--quaternary-color)",
                }}
              >
                Web Developer
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "var(--quaternary-color)",
                }}
              >
                I design and build user-friendly websites using Vite Framework,
                React Typescript, and Material-UI. My focus is on creating
                visually appealing and functional interfaces that enhance user
                experience.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            border="1px solid var(--tertiary-color)"
            padding="20px"
            borderRadius="12px"
            size={6}
          >
            <AppsOutlinedIcon
              sx={{
                color: "var(--contrast-color)",
                marginRight: "12px",
                fontSize: "24px",
              }}
            />
            <Grid container direction="column" gap="4px">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "var(--quaternary-color)",
                }}
              >
                Python Developer
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "var(--quaternary-color)",
                }}
              >
                I develop efficient and scalable solutions for automation, data
                analysis, and web backends using Python. I enjoy writing clean,
                maintainable code to solve complex problems and streamline
                workflows.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            border="1px solid var(--tertiary-color)"
            padding="20px"
            borderRadius="12px"
            size={6}
          >
            <SportsEsportsOutlinedIcon
              sx={{
                color: "var(--contrast-color)",
                marginRight: "12px",
                fontSize: "24px",
              }}
            />
            <Grid container direction="column" gap="4px">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "var(--quaternary-color)",
                }}
              >
                Game Developer
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "var(--quaternary-color)",
                }}
              >
                I create immersive gaming experiences using the Godot game
                engine. I love to program gameplay mechanics, design levels, and
                create fascinating stories.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            border="1px solid var(--tertiary-color)"
            padding="20px"
            borderRadius="12px"
            size={6}
          >
            <LinkedCameraOutlinedIcon
              sx={{
                color: "var(--contrast-color)",
              }}
            />
            <Grid container direction="column" gap="4px">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "var(--quaternary-color)",
                }}
              >
                Photographer
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "var(--quaternary-color)",
                }}
              >
                Visuals can tell stories. I love to play with the simplicity of
                lights and shadows to capture the perfect moment.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
