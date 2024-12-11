import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { Nav, ReactSetState } from "../types/Utils";
import Navigation from "./Navigation";

interface ResumeProps {
  navPage: Nav;
  setNavPage: ReactSetState<Nav>;
}

const Resume: React.FC<ResumeProps> = ({ navPage, setNavPage }) => {
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
          Resume
        </Typography>
        <hr
          style={{
            width: "60px",
            border: "3px solid var(--contrast-color)",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Resume;
