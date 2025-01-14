import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Navigation from "./Navigation";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Skills from "./Skills";

const steps = [
  {
    label: "Hirebeat. Inc",
    period: "June 2022 - Aug 2022",
    description:
      "As a Full Stack Developer in Hirebeat, I implemented an automated offer letter generation system for over 70 candidates who passed the interview process, significantly reducing manual data entry time by 300%. Using the Django framework, I developed RESTful APIs to streamline the process and generate signed URLs for the candidates to securely retrieve their offer letters as single unique links. It is integrated with AWS S3 service to generate and manage signed URLs with an automatic destruction feature, optimizing storage space and reducing operational costs.",
  },
  {
    label: "Yizhuang Holdings",
    period: "Jan 2020 - Mar 2021",
    description:
      "As a Full Stack Developer in Yizhuang Holdings, I developed a Java Spring Boot scheduler to process over 1,000 real-time cryptocurrency data updates daily from Binance. On the frontend, I utilized React JavaScript to implement an internal interface for the data analyst team. Additionally, I conducted iterative testing to refine reinforcement learning algorithms, and unit testing for interface components.",
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
                <Typography
                  sx={{
                    color: "var(--quinary-color)",
                    fontWeight: "normal",
                  }}
                >
                  {step.description}
                </Typography>
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
