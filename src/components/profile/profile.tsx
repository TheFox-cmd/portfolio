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
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";

const Profile = () => {
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
      <Grid
        container
        direction="column"
        alignItems="center"
        marginTop="70px"
        padding="36px 16px"
        gap="16px"
        width="288px"
        height="fit-content"
        borderRadius="12px"
        sx={{
          background: "var(--secondary-color)",
          border: "2px solid var(--tertiary-color)",
          boxSizing: "border-box",
        }}
      >
        <Grid width="100%" padding="0 24px">
          <Card
            sx={{
              filter: "invert(1)",
              backgroundColor: "var(--quaternary-color)",
              border: "none",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ width: 200, height: 200, border: "none" }}
                image={foxImage}
                title="fox image"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid width="100%">
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
        <Grid
          width="60%"
          sx={{
            background: "var(--tertiary-color)",
            border: "1px solid var(--tertiary-color)",
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="body1"
            lineHeight="32px"
            textAlign="center"
            color="white"
            fontSize="12px"
          >
            Frontend Developer
          </Typography>
        </Grid>
        <Grid width="90%">
          <hr style={{ border: "1px solid var(--tertiary-color)" }} />
        </Grid>
        <Grid
          container
          width="80%"
          color="var(--quaternary-color)"
          lineHeight="48px"
          justifyContent="left"
          alignItems="center"
        >
          <Grid
            sx={{
              border: "1px solid var(--tertiary-color)",
              padding: "20px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              marginRight: "12px",
            }}
          >
            <EmailOutlinedIcon
              sx={{
                fontSize: "24px",
                color: "var(--contrast-color)",
              }}
            />
          </Grid>
          <Grid container direction="column">
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "var(--quaternary-color)",
                marginBottom: "4px",
              }}
            >
              Email:
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "var(--quaternary-color)",
              }}
            >
              rkoda997@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          width="80%"
          color="var(--quaternary-color)"
          lineHeight="48px"
          justifyContent="left"
          alignItems="center"
        >
          <Grid
            sx={{
              border: "1px solid var(--tertiary-color)",
              padding: "20px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              marginRight: "12px",
            }}
          >
            <PhoneIphoneOutlinedIcon
              sx={{
                fontSize: "24px",
                color: "var(--contrast-color)",
              }}
            />
          </Grid>
          <Grid container direction="column">
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "var(--quaternary-color)",
                marginBottom: "4px",
              }}
            >
              Phone:
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "var(--quaternary-color)",
              }}
            >
              (510) 612-6878
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          width="80%"
          color="var(--quaternary-color)"
          lineHeight="48px"
          justifyContent="left"
          alignItems="center"
        >
          <Grid
            sx={{
              border: "1px solid var(--tertiary-color)",
              padding: "20px",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              marginRight: "12px",
            }}
          >
            <LocationOnOutlinedIcon
              sx={{
                fontSize: "24px",
                color: "var(--contrast-color)",
              }}
            />
          </Grid>
          <Grid container direction="column">
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "var(--quaternary-color)",
                marginBottom: "4px",
              }}
            >
              Location:
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "var(--quaternary-color)",
              }}
            >
              Lodi, WI
            </Typography>
          </Grid>

          <Grid container width="100%" textAlign="center">
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
      <Grid
        container
        direction="column"
        alignItems="center"
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
      >
        <Grid container direction="column" gap="16px">
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
              Hey there! I’m Ryuki, a full-stack developer by day and a
              storyteller by heart. I love crafting digital experiences that
              blend code with creativity. Whether I’m building seamless
              interfaces or diving deep into backend logic, I’m all about
              turning complex problems into beautifully designed solutions.
            </Typography>
            <Typography variant="body1" lineHeight="24px" color="white">
              When I’m not coding, you’ll find me behind a camera capturing the
              world’s aesthetic moments, lost in a game with an epic storyline,
              or dreaming up new game designs that blend my passion for tech,
              art, and storytelling. For me, every line of code is a like a
              little bit of magic to create something new and exciting!
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
                    I design and build user-friendly websites using Vite Framework, React Typescript,
                    and Material-UI. My focus is on creating
                    visually appealing and functional interfaces that enhance
                    user experience.
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
                    I develop efficient and scalable solutions for automation,
                    data analysis, and web backends using Python. I enjoy
                    writing clean, maintainable code to solve complex problems
                    and streamline workflows.
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
                    I create immersive gaming experiences
                    using the Godot game engine. I love to program
                    gameplay mechanics, design levels, and create fascinating
                    stories.
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
      </Grid>
    </Grid>
  );
};

export default Profile;

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
