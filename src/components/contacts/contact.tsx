import { Box, Paper } from "@mui/material";
import ContactForm from "./contactform";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";

const Contact = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      sx={{
        background:
          "linear-gradient(45deg, #0C0014 33%, #64b5f6 88%, #bbdefb 100%)",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          margin: "200px 0 0 0",
          padding: "0px",
          width: "900px",
          height: "450px",
          borderRadius: "10px",
          bgcolor: "#EAEAEA",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          width="100%"
          height="100%"
        >
          <Grid size={8} padding={5} height="100%">
            <ContactForm />
          </Grid>
          <Grid
            container
            bgcolor={blue[200]}
            direction="column"
            justifyContent="center"
            alignItems="center"
            width="320px"
            height="100%"
            sx={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <Grid
              position="relative"
              right="55px"
              lineHeight={3}
              margin={3}
              width={240}
              height={48}
              bgcolor="#0A2E5C"
              color="#EDEDED"
              borderRadius="5px"
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                lineHeight="48px"
                textAlign="center"
              >
                Email: rkoda@gmail.com
              </Typography>
            </Grid>
            <Grid
              position="relative"
              right="55px"
              lineHeight={3}
              margin={3}
              width={240}
              height={48}
              bgcolor="#0A2E5C"
              color="#EDEDED"
              borderRadius="5px"
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                lineHeight="48px"
                textAlign="center"
              >
                Phone: 5106126878
              </Typography>
            </Grid>
            <Grid
              position="relative"
              right="55px"
              lineHeight={3}
              margin={3}
              width={240}
              height={48}
              bgcolor="#0A2E5C"
              color="#EDEDED"
              borderRadius="5px"
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                lineHeight="48px"
                textAlign="center"
              >
                Discord: thefox_cmd
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Contact;
