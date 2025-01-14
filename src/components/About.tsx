import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import Navigation from "./Navigation";

const myWork = [
  {
    icon: <DevicesOutlinedIcon sx={{ color: "var(--contrast-color)" }} />,
    title: "Web Developer",
    description:
      "I design and build user-friendly websites using Vite Framework, React Typescript, and Material-UI. My focus is on creating visually appealing and functional interfaces that enhance user experience.",
  },
  {
    icon: <AppsOutlinedIcon sx={{ color: "var(--contrast-color)" }} />,
    title: "Python Developer",
    description:
      "I develop efficient and scalable solutions for automation, data analysis, and web backends using Python. I enjoy writing clean, maintainable code to solve complex problems and streamline workflows.",
  },
  {
    icon: <SportsEsportsOutlinedIcon sx={{ color: "var(--contrast-color)" }} />,
    title: "Game Developer",
    description:
      "I create immersive gaming experiences using the Godot game engine. I love to program gameplay mechanics, design levels, and create fascinating stories.",
  },
  {
    icon: <LinkedCameraOutlinedIcon sx={{ color: "var(--contrast-color)" }} />,
    title: "Photographer",
    description:
      "Visuals can tell stories. I love to play with the simplicity of lights and shadows to capture the perfect moment.",
  },
];

const About: React.FC = () => {
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
      <Navigation />
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
            marginLeft: 0,
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
        <Grid container spacing={1} alignItems="flex-start">
          {myWork.map((work, index) => (
            <Grid
              size={6}
              key={index}
              minHeight="160px"
              border="1px solid var(--quaternary-color)"
              padding="16px"
              borderRadius="12px"
              sx={{ backgroundColor: "var(--tertiary-color)" }}
            >
              <Grid>{work.icon}</Grid>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "var(--quinary-color)",
                }}
              >
                {work.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "var(--quinary-color)",
                }}
              >
                {work.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
