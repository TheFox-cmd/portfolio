import foxImage from "../assets/fox.jpg";
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

const Profile = () => {
  return (
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
            backgroundColor: "var(--quinary-color)",
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
        color="var(--quinary-color)"
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
              color: "var(--quinary-color)",
              marginBottom: "4px",
            }}
          >
            Email:
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "var(--quinary-color)",
            }}
          >
            rkoda997@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        width="80%"
        color="var(--quinary-color)"
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
              color: "var(--quinary-color)",
              marginBottom: "4px",
            }}
          >
            Phone:
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "var(--quinary-color)",
            }}
          >
            (510) 612-6878
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        width="80%"
        color="var(--quinary-color)"
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
              color: "var(--quinary-color)",
              marginBottom: "4px",
            }}
          >
            Location:
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "var(--quinary-color)",
            }}
          >
            WI, USA
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
  );
};

export default Profile;