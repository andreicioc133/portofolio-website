import React from "react";
import { useTheme } from "@emotion/react";
import IntroLayout from "../components/IntroLayout";
import ExperienceSection from "../components/ExperienceSection";
import AboutMeSection from "../components/AboutMeSection";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import { Divider } from "@mui/material";
import PlanPerfectSection from "../components/PlanPerfectSection";
import { useResponsiveValues } from "../utils/CustomHooks";
import { FONT_SIZES_DESKTOP, FONT_SIZES_MOBILE } from "../utils/Constants";

const HomePage = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <>
      <IntroLayout />
      <AboutMeSection />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90vw",
          marginTop: smallScreen && "2vh",
          borderBottom:
            smallScreen && `1px solid ${theme.palette.primary.secondary}`,
          borderTop:
            smallScreen && `1px solid ${theme.palette.primary.secondary}`,
        }}
      >
        <p
          style={{
            fontSize: smallScreen
              ? FONT_SIZES_MOBILE.h1
              : FONT_SIZES_DESKTOP.h1,
            color: theme.palette.primary.secondary,
            fontWeight: "bold",
            textAlign: "center",
            margin: smallScreen ? 0 : "",
          }}
        >
          Check out my app on Appstore!
        </p>
      </div>
      <PlanPerfectSection />
      <TechStack />
      <ExperienceSection />
      {smallScreen ? (
        <></>
      ) : (
        <div
          style={{
            width: "100%",
            height: "1vh",
            marginTop: smallScreen ? "10vh" : "5vh",
          }}
        >
          {smallScreen ? (
            <></>
          ) : (
            <Divider
              sx={{ backgroundColor: theme.palette.primary.secondary }}
            />
          )}
        </div>
      )}

      <Projects />
    </>
  );
};

export default HomePage;
