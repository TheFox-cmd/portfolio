import LinearProgress from "@mui/material/LinearProgress";

interface SkillsProps {
  proficiency: number;
}

const Skills: React.FC<SkillsProps> = ({ proficiency }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={proficiency}
      sx={{
        "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--contrast-color)", 
        },
        "& .MuiLinearProgress-dashed": {
          backgroundColor: "transparent", 
        },
        backgroundColor: "var(--quaternary-color)", 
        borderRadius: "12px",
      }}
    />
  );
};

export default Skills;
