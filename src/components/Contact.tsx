import ContactForm from "./Contactform";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Navigation from "./Navigation";
import Map from "./Map";
import { useContext } from "react";
import DeviceContext from "../contexts/DeviceContext";

const Contact: React.FC = () => {
  const isMobile = useContext(DeviceContext);

  return (
    <Grid
      container
      direction="column"
      marginTop={!isMobile ? "70px" : "0"}
      padding="36px 16px"
      gap="16px"
      width={!isMobile ? "1024px" : "100%"}
      height="fit-content"
      borderRadius={!isMobile ? "12px" : "0"}
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
          Contacts
        </Typography>
        <hr
          style={{
            width: "60px",
            border: "3px solid var(--contrast-color)",
            marginLeft: 0,
          }}
        />
      </Grid>
      <Map />
      <ContactForm />
    </Grid>
  );
};

export default Contact;
