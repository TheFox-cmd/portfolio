import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Navigation from "./Navigation";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Skills from "./Skills";
import { useContext } from "react";
import DeviceContext from "../contexts/DeviceContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { handleGlitchEffect } from "../utils/Effects";

const steps = [
  {
    label: "Hirebeat. Inc",
    period: "June 2022 - Aug 2022",
    description: [
      "Implemented an automated offer letter generation over 70 candidates who passed the interview assessment, reducing manual data entry time by 300%.",
      "Leveraged Django framework implements Restful API and lists out signed URLs for the distributed system, allowing users to retrieve their corresponding PDF as a single URL.",
      "Utilized AWS S3 to generate unique signed URLs with a destruction feature, optimizing storage space and reducing costs.",
    ],
  },
  {
    label: "Yizhuang Holdings",
    period: "Jan 2020 - Mar 2021",
    description: [
      "Developed a Java Spring Boot scheduler that processed over 1,000 real-time cryptocurrency data updates daily from binance, ensuring timely and accurate data availability.",
      "Developed the frontend of the Binance experience using React JavaScript, delivering a responsive and simple interface for the data analyst team.",
      "Conducted iterative testing to refine algorithms for Reinforcement Learning, resulting in a 30% improvement in graph accuracy and user comprehension.",
    ],
  },
];

const mySkills = [
  {
    name: "Python",
    proficiency: 60,
  },
  {
    name: "React Typescript",
    proficiency: 70,
  },
  {
    name: "MongoDB",
    proficiency: 50,
  },
  {
    name: "AWS",
    proficiency: 30,
  },
];

const Resume: React.FC = () => {
  const isMobile = useContext(DeviceContext);
  return (
    <Grid
      container
      direction="column"
      marginTop={!isMobile ? "70px" : "0"}
      padding={!isMobile ? "36px 12px" : "12px 16px"}
      gap="16px"
      width={!isMobile ? "1024px" : "100%"}
      height="fit-content"
      borderRadius={!isMobile ? "12px" : "0"}
      border={!isMobile ? "2px solid var(--tertiary-color)" : "none"}
      position="relative"
      sx={{
        backgroundColor: !isMobile ? "var(--secondary-color)" : 0,
      }}
    >
      <Navigation />
      <Grid container direction="column" gap="16px">
        <Typography
          variant="h5"
          fontWeight="bold"
          lineHeight="24px"
          color="white"
          onMouseEnter={handleGlitchEffect}
        >
          Resume
        </Typography>
        <hr
          style={{
            width: "60px",
            border: "3px solid var(--contrast-color)",
            marginLeft: 0,
          }}
        />
      </Grid>
      <Grid container direction="column" padding="12px" gap="12px">
        <Grid container alignItems="center">
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
            <TerminalOutlinedIcon
              sx={{
                fontSize: "24px",
                color: "var(--contrast-color)",
              }}
            />
          </Grid>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="var(--quinary-color)"
            onMouseEnter={handleGlitchEffect}
          >
            Experience
          </Typography>
        </Grid>
        <Stepper
          orientation="vertical"
          sx={{
            position: "relative",
            borderRadius: "12px",
            padding: "0 9px",
          }}
        >
          {steps.map((step, index) => (
            <Step key={index} active>
              <StepLabel
                StepIconComponent={() => (
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "var(--contrast-color)",
                      border: "6px solid var(--tertiary-color)",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                )}
                sx={{
                  "& .MuiStepLabel-label": {
                    color: "var(--quinary-color) !important",
                    fontWeight: "bold !important",
                    fontSize: "20px !important",
                  },
                  "&.Mui-active .MuiStepLabel-label": {
                    color: "var(--quinary-color) !important",
                    fontWeight: "bold !important",
                    fontSize: "20px !important",
                  },
                }}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography
                  sx={{
                    color: "var(--contrast-color)",
                    fontWeight: "normal",
                    fontStyle: "italic",
                  }}
                >
                  {step.period}
                </Typography>
                {step.description.map((description, index) => (
                  <List key={index}>
                    <ListItem disablePadding>
                      <Typography
                        sx={{
                          color: "var(--quinary-color)",
                          fontWeight: "normal",
                        }}
                      >
                        {description}
                      </Typography>
                    </ListItem>
                  </List>
                ))}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid container direction="column" padding="12px" gap="6px">
        <Typography
          variant="h5"
          fontWeight="bold"
          lineHeight="16px"
          color="var(--quinary-color)"
          marginBottom="12px"
          onMouseEnter={handleGlitchEffect}
        >
          My Skills
        </Typography>
        {mySkills.map((skill, index) => (
          <Grid
            container
            direction="column"
            sx={{
              padding: "16px",
              backgroundColor: "var(--tertiary-color)",
              border: "1px solid var(--quaternary-color)",
              borderRadius: "12px",
            }}
            key={index}
          >
            <Grid>
              <Typography
                variant="body1"
                fontWeight="bold"
                lineHeight="16px"
                color="var(--quinary-color)"
                marginBottom="6px"
              >
                {skill.name + " - " + skill.proficiency + "%"}
              </Typography>
              <Skills proficiency={skill.proficiency} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Resume;

{
  /* <Grid container direction="column" padding="12px" gap="12px">
  <Grid container alignItems="center">
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
      <TerminalOutlinedIcon
        sx={{
          fontSize: "24px",
          color: "var(--contrast-color)",
        }}
      />
    </Grid>
    <Typography variant="h5" fontWeight="bold" color="var(--quinary-color)">
      Experience
    </Typography>
  </Grid>
  <Stepper
    orientation="vertical"
    sx={{
      position: "relative",
      borderRadius: "12px",
      padding: "0 9px",
    }}
  >
    {steps.map((step, index) => (
      <Step key={index} active>
        <StepLabel
          StepIconComponent={() => (
            <span
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "var(--contrast-color)",
                border: "6px solid var(--tertiary-color)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          )}
          sx={{
            "& .MuiStepLabel-label": {
              color: "var(--quinary-color)",
              fontWeight: "bold",
              fontSize: "16px",
            },
          }}
        >
          {step.label}
        </StepLabel>
        <StepContent
          sx={{
            "& .MuiTypography-root": {
              color: "var(--quinary-color)",
              fontWeight: "normal",
            },
          }}
        >
          <Typography>{step.description}</Typography>
        </StepContent>
      </Step>
    ))}
  </Stepper>
</Grid>; */
}
