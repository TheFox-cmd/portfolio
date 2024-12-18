import ContactForm from "./Contactform";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Navigation from "./Navigation";
import Map from "./Map";

const Contact: React.FC = () => {
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
          Contacts
        </Typography>
        <hr
          style={{
            width: "60px",
            border: "3px solid var(--contrast-color)",
          }}
        />
      </Grid>
      <Map />
      <ContactForm />
    </Grid>
  );
};

export default Contact;
