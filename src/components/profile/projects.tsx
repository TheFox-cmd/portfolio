import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import gtfoBg from "../../assets/gtfo_bg.jpg";
import mimcatBg from "../../assets/discord_bg.jpg";
import { Box } from "@mui/material";
import MUILink from "@mui/material/Link";

const Projects = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4} color="white">
        <Card
          sx={{
            maxWidth: 345,
            bgcolor: "#DADADA",
            borderRadius: "12px",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#0A2E5C",
              color: "#EAEAEA",
            },
          }}
        >
          <MUILink
            href="http://gtfo.thefox-cmd.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
          >
            <CardActionArea>
              <CardMedia
                sx={{ height: 70 }}
                image={gtfoBg}
                title="GTFO Background"
              />
              <CardContent sx={{ height: 40, padding: "12px", lineHeight: 1 }}>
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
                    GTFO Log Tracker
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </MUILink>
        </Card>
      </Grid>
      <Grid size={4} color="white">
        <Card
          sx={{
            maxWidth: 345,
            bgcolor: "#DADADA",
            borderRadius: "12px",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#0A2E5C",
              color: "#EAEAEA",
            },
          }}
        >
          <MUILink
            href="https://github.com/TheFox-cmd/discord_mimCat"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
          >
            <CardActionArea>
              <CardMedia
                sx={{ height: 70 }}
                image={mimcatBg}
                title="Discord Background"
              />
              <CardContent sx={{ height: 40, padding: "12px", lineHeight: 1 }}>
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
                    Discord Bot - MimCat
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </MUILink>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Projects;
