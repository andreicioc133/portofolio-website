import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import { motion } from "framer-motion";
import TypeWriter from "./GenericComponents/TypeWriter";
import { useIntersection } from "../utils/CustomHooks";

function TechStack() {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  const triggerRef = React.useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  const data = [
    { id: 0, title: "React.js ", maxProgress: 90 },
    { id: 1, title: "React-Native", maxProgress: 90 },
    { id: 2, title: "Javascript", maxProgress: 90 },
    { id: 3, title: "TypeScript", maxProgress: 80 },
    { id: 4, title: "HTML/CSS ", maxProgress: 90 },
    { id: 5, title: "Next.js", maxProgress: 70 },
    { id: 6, title: "Node.js ", maxProgress: 80 },
    { id: 7, title: "Express.Js", maxProgress: 80 },
    { id: 8, title: "PostgreSQL", maxProgress: 80 },
    { id: 9, title: "MongoDB", maxProgress: 80 },
    { id: 10, title: "Python", maxProgress: 60 },
    { id: 11, title: "Django", maxProgress: 60 },
    { id: 12, title: "Git/GitHub/GitLab", maxProgress: 90 },
    { id: 13, title: "Appium Testing", maxProgress: 50 },
    { id: 14, title: "Unit Testing", maxProgress: 90 },
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
        marginTop: smallScreen ? "" : "15vh",
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: `0px 2px 6px 2px ${theme.palette.primary.black}`,
      }}
    >
      <div style={{ width: "100%" }}>
        <p
          style={{
            fontSize: "3rem",
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
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {data.map((el) => (
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
