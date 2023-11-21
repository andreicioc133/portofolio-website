import React from "react";
import { useTheme } from "@emotion/react";
import IntroLayout from "../components/IntroLayout";
import ExperienceSection from "../components/ExperienceSection";
import AboutMeSection from "../components/AboutMeSection";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import { Divider } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <IntroLayout />
      <AboutMeSection />
      <TechStack />
      <ExperienceSection />
      <div
        style={{
          width: "100%",
          height: "1vh",
          marginTop: "10vh",
        }}
      >
        <Divider sx={{ backgroundColor: theme.palette.primary.secondary }} />
      </div>
      <Projects />
    </>
  );
};

export default HomePage;
