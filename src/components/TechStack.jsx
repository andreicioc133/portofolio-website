import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import { motion } from "framer-motion";
import TypeWriter from "./GenericComponents/TypeWriter";
import { useIntersection } from "../utils/CustomHooks";
import { FONT_SIZES_DESKTOP, FONT_SIZES_MOBILE } from "../utils/Constants";
import TypeWriterWithoutProgress from "./GenericComponents/TypeWriterWithoutProgess";

function TechStack() {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  const triggerRef = React.useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  const data = [
    { id: 0, title: "React.js  ", maxProgress: 100 },
    { id: 1, title: "React-Native", maxProgress: 100 },
    { id: 2, title: "Javascript", maxProgress: 100 },
    { id: 3, title: "TypeScript", maxProgress: 100 },
    { id: 4, title: "HTML/CSS  ", maxProgress: 100 },
    { id: 5, title: "Next.js   ", maxProgress: 100 },
    { id: 6, title: "Node.js   ", maxProgress: 100 },
    { id: 7, title: "Express.Js", maxProgress: 100 },
    { id: 8, title: "PostgreSQL", maxProgress: 100 },
    { id: 9, title: "MongoDB   ", maxProgress: 100 },
    { id: 10, title: "Python    ", maxProgress: 100 },
    { id: 11, title: "Canva     ", maxProgress: 100 },
    { id: 12, title: "Git/GitHub/GitLab", maxProgress: 100 },
    { id: 13, title: "Appium Testing", maxProgress: 100 },
    { id: 14, title: "Unit Testing", maxProgress: 100 },
  ];

  return (
    <motion.div
      ref={triggerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className="from-right-div"
      id="tech-stack-section"
      style={{
        display: "flex",
        flexDirection: smallScreen ? "column" : "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "95vw",
        minHeight: "40vh",
        marginTop: smallScreen ? "" : "5vh",
        border: "1px solid",
        borderRadius: "10px",
        borderRightWidth: "0px",
        borderLeftWidth: "0px",
        borderColor: `${theme.palette.primary.secondary}`,
        // boxShadow: `0px 0px 4px 1px ${theme.palette.primary.secondary}`,
        paddingBottom: smallScreen && "5vh",
      }}
    >
      <div style={{ width: "100%" }}>
        <p
          style={{
            fontSize: smallScreen
              ? FONT_SIZES_MOBILE.h1
              : FONT_SIZES_DESKTOP.h1,
            textAlign: "center",
            background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            margin: "1rem",
          }}
        >
          Tech Stack
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: smallScreen ? "" : "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {smallScreen
          ? data.map((el) => (
              <TypeWriterWithoutProgress
                key={el?.id}
                text={el?.title}
                delay="150"
                isVisible={isVisible}
              />
            ))
          : data.map((el) => (
              <TypeWriter
                key={el?.id}
                text={el?.title}
                delay="150"
                maxProgress={el?.maxProgress}
                isVisible={isVisible}
              />
            ))}
      </div>
    </motion.div>
  );
}

export default TechStack;
