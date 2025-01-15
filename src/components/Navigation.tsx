import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeviceContext from "../contexts/DeviceContext";
import { useContext } from "react";

const Navigation: React.FC = () => {
  const location = useLocation();
  const isMobile = useContext(DeviceContext);

  const pages = [
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/resume",
      name: "Resume",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  const handlePageNavigation = (page: string) => {
    window.history.pushState({}, "", page);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    !isMobile && (
      <Grid
        container
        gap="48px"
        borderRadius="0 12px"
        padding="12px 24px"
        color="var(--quinary-color)"
        sx={{ backgroundColor: "var(--tertiary-color)" }}
        position="absolute"
        top="0"
        right="0"
      >
        {pages.map((page, index) => (
          <Button
            key={index}
            variant="text"
            color="inherit"
            onClick={() => handlePageNavigation(page.path)}
            sx={{
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: "0%",
                height: "3px",
                backgroundColor:
                  location.pathname === page.path
                    ? "var(--tertiary-color)"
                    : "var(--contrast-color)",
                transition: "all 0.3s ease",
                transform: "translateX(-50%)",
              },
              "&:hover::after": {
                width: "80%",
              },
            }}
          >
            <Typography
              sx={{
                color:
                  location.pathname === page.path
                    ? "var(--contrast-color)"
                    : "var(--quinary-color)",
              }}
            >
              {page.name}
            </Typography>
          </Button>
        ))}
      </Grid>
    )
  );
};

export default Navigation;

