import { Link } from "react-router-dom";
import Projects from "./projects";
import foxImage from "../../assets/fox.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MUILink from "@mui/material/Link";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InboxIcon from '@mui/icons-material/Inbox';

const Profile = () => {
  return (
    <Grid
      container
      width="100vw"
      height="100vh"
      sx={{
        background:
          "linear-gradient(45deg, #0C0014 33%, #64b5f6 88%, #bbdefb 100%)",
      }}
    >
      <Grid container size={6} justifyContent="center" alignItems="center">
        <Grid
          container
          direction="column"
          alignItems="center"
          width="70%"
          height="80%"
        >
          <Grid width="60%" margin="16px">
            <Card
              sx={{
                borderRadius: "12px",
                filter: "invert(1)",
                backgroundColor: "transparent",
              }}
            >
              <CardActionArea>
                <CardMedia
                  sx={{ height: 500 }}
                  image={foxImage}
                  title="fox image"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid width="60%" margin="16px">
            <Typography
              variant="body1"
              fontWeight="bold"
              lineHeight="48px"
              textAlign="center"
              color="white"
              fontSize="36px"
            >
              Ryuki Koda
            </Typography>
          </Grid>
          <Grid container width="60%" margin="16px" textAlign="center">
            <Grid size={4}>
              <MUILink
                href="https://www.instagram.com/a.random.fox/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="white"
              >
                <InstagramIcon />
              </MUILink>
            </Grid>
            <Grid size={4}>
              <MUILink
                href="https://github.com/TheFox-cmd"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="white"
              >
                <GitHubIcon />
              </MUILink>
            </Grid>
            <Grid size={4}>
              <MUILink
                href="https://www.linkedin.com/in/ryuki-koda-b812731b6/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="white"
              >
                <LinkedInIcon />
              </MUILink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container size={6} direction="column" padding={12}>
        <Grid marginBottom="16px" >
          <Typography
            variant="h5"
            fontWeight="bold"
            lineHeight="24px"
            color="white"
            marginBottom="16px"
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            lineHeight="24px"
            color="white"
            marginBottom="16px"
          >
            Hey there! I’m Ryuki, a full-stack developer by day and a
            storyteller by heart. I love crafting digital experiences that blend
            code with creativity. Whether I’m building seamless interfaces or
            diving deep into backend logic, I’m all about turning complex
            problems into beautifully designed solutions. When I’m not coding,
            you’ll find me behind a camera capturing the world’s aesthetic
            moments, lost in a game with an epic storyline, or dreaming up new
            game designs that blend my passion for tech, art, and storytelling.
            For me, every line of code is a like a little bit of magic to create
            something new and exciting!
          </Typography>
        </Grid>
        <Grid marginBottom="16px" flexGrow={1}>
          <Typography
            variant="h5"
            fontWeight="bold"
            lineHeight="24px"
            color="white"
            marginBottom="16px"
          >
            Projects
          </Typography>
          <Projects />
        </Grid>
        <Grid container marginBottom="16px" justifyContent="flex-end">
          <Button
            component={Link}
            to="/contacts"
            variant="contained"
            endIcon={<InboxIcon />}
            sx={{ bgcolor: "#0A2E5C" }}
          >
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
