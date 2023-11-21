import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import { motion } from "framer-motion";
import { useIntersection } from "../utils/CustomHooks";
import TypeWriterWithoutProgress from "./GenericComponents/TypeWriterWithoutProgess";

const Projects = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  const triggerRef = React.useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  const data = [
    {
      id: 0,
      title: "Timesheets Mobile application",
      description:
        "made with React Native based on Odoo Backend. The app makes project management, like creating projects, tasks etc. much easier and has an optimized system to add and track timesheets",
    },
    {
      id: 1,
      title: "Django application",
      description:
        "Implemented custom User management + authentication based on JSON Web Tokens",
    },
    {
      id: 2,
      title: "Full upgrade on React-Native application",
      description:
        "Updated libraries and transition from class based components to functional components + stripe integration both in backend (Django) and frontend",
    },
    {
      id: 3,
      title: "Data visualisation project",
      description:
        "Created React.js, React-Bootstrap, React Router, D3.js, GraphQL and Apollo framework for external API communication;",
    },
    {
      id: 4,
      title: "OCR React application",
      description:
        "Created for accounting purposes. It was created using React 18 + Typescript. It features rich UI/UX due to @Material-UI, Material Table and TailwindCSS",
    },
    {
      id: 5,
      title: "Portofolio application",
      description:
        "made with React.js, React-Bootstrap, SCSS.This was one of my first projects. The aplication was deployed using Netlify.",
      link: "https://andreiciocdev.netlify.app/",
    },
    {
      id: 6,
      title: "Courier management System",
      description:
        "cross-platform mobile application for one of our biggest international clients. I developed features, solved bugs, integrated automated testing using Appium and wrote the afferent tests and also mantained the application.",
    },
    {
      id: 7,
      title: "Business presentation site",
      description:
        "Created with Next.js, React.js and MongoDB. Features implementation of Contact form with Next.js backend creation.",
      link: "https://www.futuristix-digital.com/",
    },
    {
      id: 8,
      title: "Multiple presentation sites",
      description: "Created with React.js and deployed on hostinger.",
      link: "https://www.clarvazatoare-online.com/",
    },
    {
      id: 9,
      title: "AI Powered Chatbot deployed on cloud",
      description:
        "Created for my Bachelor’s thesis. This was developed using Python, Tensorflow, Keras, Flask, HTML/CSS/JS + Axios and integrated on Heroku’s cloud hosting.",
    },
  ];

  return (
    <motion.div
      //   initial="hidden"
      //   whileInView="visible"
      //   viewport={{ once: true }}
      //   transition={{ duration: 1 }}
      //   variants={{
      //     visible: { opacity: 1, scale: 1 },
      //     hidden: { opacity: 0, scale: 0 },
      //   }}
      className="from-right-div"
      id="my-work-section"
      style={{
        display: "flex",
        flexDirection: smallScreen ? "column" : "column",
        alignItems: smallScreen ? "center" : "flex-start",
        width: smallScreen ? "95vw" : "90vw",
        minHeight: "60vh",
        marginTop: smallScreen ? "" : "10vh",
        // border: `1px solid ${theme.palette.primary.secondary}`,
        // boxShadow: `0px 2px 6px 2px ${theme.palette.primary.black}`,
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
            fontSize: "3rem",
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
          alignItems: "center",
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
              minHeight: "50vh",
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: `0px 2px 6px 2px ${theme.palette.primary.black}`,
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
                fontSize: "1.2rem",
                color: theme.palette.primary.tertiary,
                margin: 0,
              }}
            >
              {el?.description}
            </p>
            {el?.link ? (
              <a
                href={el?.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: theme.palette.primary.secondary,
                    margin: 0,
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
