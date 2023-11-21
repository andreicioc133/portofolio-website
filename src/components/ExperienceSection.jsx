import React from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import { motion } from "framer-motion";
import GenericButton from "./GenericComponents/GenericButton";

const ExperienceSection = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  const data = [
    {
      id: 0,
      title: "Logit Consulting Solutions",
      role: "Software Engineer",
      period: "Aug 2021 - Sep 2022",
    },
    {
      id: 1,
      title: "BearingPoint Romania",
      role: "Software Engineer",
      period: "Sep 2022 - Present",
    },
  ];

  const educationData = [
    {
      id: 0,
      title: "Colegiul National Nichita Stanescu Ploiesti",
      role: "Student",
      period: "2012-2016",
    },
    {
      id: 1,
      title: "Petroleum and Gas University of Ploiesti",
      role: "Computer Sciene Bachelor",
      period: "2017 - 2021",
    },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="from-right-div"
        id="experience-section"
        style={{
          display: "flex",
          flexDirection: smallScreen ? "column" : "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "90vw",
          minHeight: "60vh",
          marginTop: "10vh",
          backgroundColor: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.secondary}`,
          borderRadius: "50px",
          boxShadow: `0px 1px 4px 2px ${theme.palette.primary.secondary}`,
          padding: smallScreen ? "1rem 0 2rem 0" : "",
        }}
      >
        <div style={{ width: "100%" }}>
          <p
            style={{
              fontSize: "7vh",
              textAlign: "center",
              background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              margin: "1rem",
            }}
          >
            Experience & Education
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: smallScreen ? "column" : "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          {/* ///////////////////// */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "5vh",
                  background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  margin: 0,
                  textAlign: smallScreen ? "center" : "",
                }}
              >
                Experience
              </p>

              {data.map((el) => (
                <div
                  key={el?.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: smallScreen ? "center" : "flex-start",
                    width: smallScreen ? "80vw" : "40vw",
                  }}
                >
                  <p
                    style={{
                      margin: "2vh 0 0 0",
                      fontSize: "3vh",
                      color: theme.palette.primary.secondary,
                      textAlign: smallScreen ? "center" : "",
                    }}
                  >
                    {el.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: theme.palette.primary.tertiary,
                      paddingLeft: smallScreen ? "" : "2vh",
                      textAlign: smallScreen ? "center" : "",
                    }}
                  >
                    {el.role}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: theme.palette.primary.tertiary,
                      paddingLeft: smallScreen ? "" : "2vh",
                      textAlign: smallScreen ? "center" : "",
                    }}
                  >
                    {el.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* ///////////// */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "5vh",
                  background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: theme.palette.primary.secondary,
                  margin: smallScreen ? "2vh 0 0 0" : 0,
                  textAlign: smallScreen ? "center" : "",
                }}
              >
                Education
              </p>
              {educationData.map((el) => (
                <div
                  key={el?.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: smallScreen ? "center" : "flex-start",
                    width: smallScreen ? " 80vw" : "40vw",
                  }}
                >
                  <p
                    style={{
                      margin: "2vh 0 0 0",
                      fontSize: "3vh",
                      color: theme.palette.primary.secondary,
                      textAlign: smallScreen ? "center" : "",
                    }}
                  >
                    {el.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: theme.palette.primary.tertiary,
                      paddingLeft: smallScreen ? "" : "2vh",
                      textAlign: smallScreen ? "center" : "",
                    }}
                  >
                    {el.role}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: theme.palette.primary.tertiary,
                      paddingLeft: smallScreen ? "" : "2vh",
                      textAlign: smallScreen ? "center" : "",
                    }}
                  >
                    {el.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ///////////// */}
        </div>
      </motion.div>
    </>
  );
};

export default ExperienceSection;
