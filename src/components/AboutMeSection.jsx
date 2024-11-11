import React from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import { motion } from "framer-motion";
import { FONT_SIZES_DESKTOP, FONT_SIZES_MOBILE } from "../utils/Constants";

const AboutMeSection = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <motion.div
      initial={smallScreen ? "" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: smallScreen ? 1 : "some" }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, marginLeft: "0", scale: 1 },
        hidden: { opacity: 0, marginLeft: "50vw", scale: 0 },
      }}
      className="from-right-div"
      id="about-me-section"
      style={{
        display: "flex",
        flexDirection: smallScreen ? "column" : "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
        width: smallScreen ? "93vw" : "90vw",
        marginTop: smallScreen ? "2vh" : "2vh",
        paddingBottom: smallScreen ? " 2vh" : "2vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: smallScreen
              ? FONT_SIZES_MOBILE.h1
              : FONT_SIZES_DESKTOP.h1,
            background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            margin: smallScreen ? "2vh 0 0 0" : "1vh 0 0 0",
            textAlign: "center",
          }}
        >
          Who am I ?
        </p>
        <p
          style={{
            fontSize: smallScreen
              ? FONT_SIZES_MOBILE.text
              : FONT_SIZES_DESKTOP.text,
            color: theme.palette.primary.tertiary,
            margin: "1vh 0 0 0",
            textAlign: "center",
          }}
        >
          &nbsp;&nbsp;As a 26-year-old Software Engineer with over three years
          of specialized{" "}
          <span
            style={{
              fontSize: smallScreen
                ? FONT_SIZES_MOBILE.text
                : FONT_SIZES_DESKTOP.text,
              color: theme.palette.primary.secondary,
              margin: "0 0 0 0",
            }}
          >
            experience in frontend development, I have honed my skills in React,
            React-Native, and Next.js
          </span>
          , distinguishing myself in the field of modern web and mobile app
          development. My journey in technology is driven by a passion for
          creating intuitive and dynamic user interfaces, which has been a
          cornerstone of my career thus far.
          <br />
          <span
            style={{
              fontSize: smallScreen
                ? FONT_SIZES_MOBILE.text
                : FONT_SIZES_DESKTOP.text,
              color: theme.palette.primary.secondary,
              margin: "0 0 0 0",
            }}
          >
            &nbsp;&nbsp;My proficiency with React and React-Native places me at
            the forefront of developing responsive, efficient, and
            cross-platform applications. This expertise is further enhanced by
            my familiarity with Next.js, enabling me to build server-side
            rendered applications that offer improved performance and SEO
            advantages.
          </span>
          {/* <br />
            &nbsp;&nbsp;In addition to my technical skills, I pride myself on
            being a hard-working professional who is dedicated to every project
            I undertake. My approach to work is characterized by a meticulous
            attention to detail, a commitment to meeting deadlines, and an
            unwavering focus on delivering high-quality output.
            <br /> */}
          {/* <span
              style={{
                fontSize: "2.3vh",
                color: theme.palette.primary.secondary,
                margin: "0 0 0 0",
              }}
            >
              &nbsp;&nbsp;Collaboration and teamwork
            </span>{" "} */}
          {/* are central to my work ethic. I believe that the best solutions
            emerge from a synergy of diverse ideas and perspectives.{" "} */}
          {/* <span
              style={{
                fontSize: "2.3vh",
                color: theme.palette.primary.secondary,
                margin: "0 0 0 0",
              }}
            > */}
          {/* My experience working in team environments has equipped me with
              strong communication skills and the ability to integrate
              seamlessly into various working groups
            </span>
            , contributing positively to team dynamics while also being capable
            of independent work.
            <br />
            <span
              style={{
                fontSize: "2.3vh",
                color: theme.palette.primary.secondary,
                margin: "0 0 0 0",
              }}
            >
              &nbsp;&nbsp;I'm continuously seeking new challenges and
              opportunities to grow and contribute meaningfully in the field of
              software engineering
            </span>
            , particularly in areas that leverage my expertise in frontend
            development and my passion for building engaging user experiences. */}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMeSection;
