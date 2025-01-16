import foxImage from "../assets/fox.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import DeviceContext from "../contexts/DeviceContext";

const contactInfo = [
  {
    icon: (
      <EmailOutlinedIcon
        sx={{ fontSize: "24px", color: "var(--contrast-color)" }}
      />
    ),
    title: "Email",
    description: "rkoda997@gmail.com",
  },
  {
    icon: (
      <PhoneIphoneOutlinedIcon
        sx={{ fontSize: "24px", color: "var(--contrast-color)" }}
      />
    ),
    title: "Phone",
    description: "(510) 612-6878",
  },
  {
    icon: (
      <LocationOnOutlinedIcon
        sx={{ fontSize: "24px", color: "var(--contrast-color)" }}
      />
    ),
    title: "Location",
    description: "WI, USA",
  },
];

const socialInfo = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/a.random.fox/",
  },
  {
    icon: <GitHubIcon />,
    href: "https://github.com/TheFox-cmd",
  },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/ryuki-koda-b812731b6/",
  },
];

const Profile = () => {
  const isMobile = useContext(DeviceContext);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      marginTop={!isMobile ? "70px" : "0"}
      padding={!isMobile ? "36px 12px" : "0px 16px"}
      gap="16px"
      width={!isMobile ? "288px" : "100%"}
      height="fit-content"
      borderRadius={!isMobile ? "12px" : "0"}
      border={!isMobile ? "2px solid var(--tertiary-color)" : "none"}
      sx={{
        background: "var(--secondary-color)",
      }}
    >
      <Grid
        width="100%"
        padding="0 24px"
        container
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "var(--secondary-color)" }}
      >
        <img
          src={foxImage}
          alt="Profile Picture"
          style={{
            filter: "invert(1)",
            width: "200px",
            height: "auto",
          }}
        />
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
        alignItems="center"
        // justifyContent="space-between"
        justifyContent="center"
        color="var(--quinary-color)"
        direction="column"
      >
        {contactInfo.map((contact, index) => (
          <Grid
            container
            width="100%"
            color="var(--quinary-color)"
            lineHeight="48px"
            justifyContent="flex-start"
            alignItems="center"
            key={index}
          >
            {/* icon  */}
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
              {contact.icon}
            </Grid>
            {/* title and description */}
            <Grid container direction="column">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "var(--quinary-color)",
                  marginBottom: "4px",
                }}
              >
                {contact.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "var(--quinary-color)",
                }}
              >
                {contact.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        width="60%"
        alignItems="center"
        justifyContent="space-between"
        color="var(--quinary-color)"
      >
        {socialInfo.map((social, index) => (
          <IconButton
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            key={index}
            sx={{
              ":hover": {
                color: "var(--contrast-color)",
              },
            }}
          >
            {social.icon}
          </IconButton>
        ))}
      </Grid>
    </Grid>
  );
};

export default Profile;
