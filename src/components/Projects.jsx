import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import { motion } from "framer-motion";
import { useIntersection } from "../utils/CustomHooks";
import TypeWriterWithoutProgress from "./GenericComponents/TypeWriterWithoutProgess";
import { FONT_SIZES_DESKTOP, FONT_SIZES_MOBILE } from "../utils/Constants";

const Projects = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  const triggerRef = React.useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  const data = [
    {
      id: 0,
      title: "Perfect Plan app",
      description:
        "My most recent app I deployed on iOS Appstore. It's an app that i needed for my day to day activities. Created with React-Native, it's a very lightweight and optimized RN App that does not require internet connection. Features: Plans management, automatic deletion systems, push notifications and much more!",
      link: "https://github.com/andreicioc133/DayPlanner",
    },
    {
      id: 1,
      title: "Timesheets Mobile application",
      description:
        "Made with React Native based on Odoo Backend. The app makes project management, like creating projects, tasks etc. much easier and has an optimized system to add and track timesheets",
    },
    // {
    //   id: 2,
    //   title: "Django application",
    //   description:
    //     "Implemented custom User management + authentication based on JSON Web Tokens",
    // },
    {
      id: 2,
      title: "Courier management System",
      description:
        "cross-platform mobile application for one of our biggest international clients. I developed features, solved bugs, integrated automated testing using Appium and wrote the afferent tests and also mantained the application.",
    },
    {
      id: 3,
      title: "Full upgrade on React-Native application",
      description:
        "Updated libraries and transition from class based components to functional components + stripe integration both in backend (Django) and frontend",
    },
    {
      id: 4,
      title: "Data visualisation project",
      description:
        "Created React.js, React-Bootstrap, React Router, D3.js, GraphQL and Apollo framework for external API communication;",
    },
    {
      id: 5,
      title: "OCR React application",
      description:
        "Created for accounting purposes. It was created using React 18 + Typescript. It features rich UI/UX due to @Material-UI, Material Table and TailwindCSS",
    },
    {
      id: 6,
      title: "Portofolio application",
      description:
        "made with React.js, React-Bootstrap, SCSS.This was one of my first projects. The aplication was deployed using Netlify.",
      link: "https://andreiciocdev.netlify.app/",
    },

    {
      id: 8,
      title: "Business presentation site",
      description:
        "Created with Next.js, React.js and MongoDB. Features implementation of Contact form with Next.js backend creation.",
      link: "https://www.futuristix-digital.com/",
    },
    {
      id: 9,
      title: "Multiple presentation sites",
      description: "Created with React.js and deployed on hostinger.",
      link: "https://www.clarvazatoare-online.com/",
    },
    {
      id: 10,
      title: "AI Powered Chatbot deployed on cloud",
      description:
        "Created for my Bachelor’s thesis. This was developed using Python, Tensorflow, Keras, Flask, HTML/CSS/JS + Axios and integrated on Heroku’s cloud hosting.",
    },
  ];

  return (
    <motion.div
      className="from-right-div"
      id="my-work-section"
      style={{
        display: "flex",
        flexDirection: smallScreen ? "column" : "column",
        alignItems: smallScreen ? "center" : "flex-start",
        width: smallScreen ? "95vw" : "90vw",
        minHeight: "60vh",
        marginTop: smallScreen ? "" : "2vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
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
            margin: "1vh 0 0 0 ",
          }}
        >
          My work
        </p>
      </div>
      <div
        ref={triggerRef}
        style={{
          display: "flex",
          flexDirection: smallScreen ? "column" : "row",
          justifyContent: "space-around",
          // alignItems: "center",
          flexWrap: "wrap",
          padding: "1rem",
        }}
      >
        {/* Project Card */}

        {data.map((el) => (
          <div
            key={el?.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "1rem",
              width: smallScreen ? "85vw" : "25vw",
              // minHeight: smallScreen ? "" : "70vh",
              borderRadius: "5px",
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: `0px 0px 4px 1px ${theme.palette.primary.secondary}`,
              margin: "2rem 0 0 0",
            }}
          >
            <TypeWriterWithoutProgress
              text={el?.title}
              delay={100}
              isVisible={isVisible}
            />
            <p
              style={{
                fontSize: smallScreen
                  ? FONT_SIZES_MOBILE.text
                  : FONT_SIZES_DESKTOP.text,
                color: theme.palette.primary.tertiary,
                margin: 0,
              }}
            >
              {el?.description}
            </p>
            {el?.link ? (
              <a href={el?.link} target="_blank">
                <p
                  style={{
                    fontSize: smallScreen
                      ? FONT_SIZES_MOBILE.h4
                      : FONT_SIZES_DESKTOP.h4,
                    color: theme.palette.primary.secondary,
                    margin: 0,
                    wordWrap: "break-word",
                  }}
                >
                  Link: {el?.link}
                </p>
              </a>
            ) : (
              <></>
            )}
          </div>
        ))}

        {/* Project Card END*/}
      </div>
    </motion.div>
  );
};

export default Projects;
