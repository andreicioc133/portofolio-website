import React, { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import img from "../assets/ProfilePhoto.jpg";
import GenericButton from "./GenericComponents/GenericButton";
import ExternalLinksComponent from "./GenericComponents/ExternalLinksComponent";
import { motion } from "framer-motion";
import { scrollDownByValue } from "../utils/CustomFunctions";
import { convertVhToPh } from "../utils/CustomFunctions";
import EmailIcon from "@mui/icons-material/Email";
import { FONT_SIZES_DESKTOP, FONT_SIZES_MOBILE } from "../utils/Constants";

const IntroLayout = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "Software Engineer";
  const delay = 80;
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, marginRight: "0", scale: 1 },
          hidden: { opacity: 0, marginRight: "50vw", scale: 0 },
        }}
        className="from-right-div"
        style={{
          display: "flex",
          flexDirection: smallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          width: "99vw",
          minHeight: "90vh",
          marginTop: smallScreen ? "5vh" : "0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 0.4,
            paddingLeft: smallScreen ? "0" : "5rem",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: smallScreen ? "center" : "",
              justifyContent: "flex-start",
            }}
          >
            <p
              style={{
                fontSize: smallScreen ? "34px" : "42px",
                // textAlign: "center",
                // color: theme.palette.primary.tertiary,
                background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                margin: 0,
                textAlign: smallScreen ? "center" : "",
              }}
            >
              Hi, i'm Andrei
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  fontSize: smallScreen
                    ? FONT_SIZES_MOBILE.h3
                    : FONT_SIZES_DESKTOP.h1,
                  // textAlign: "center",
                  // color: theme.palette.primary.tertiary,
                  background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  margin: 0,
                  textAlign: smallScreen ? "center" : "",
                }}
              >
                And I'm a
              </p>
              <p
                style={{
                  fontSize: smallScreen
                    ? FONT_SIZES_MOBILE.h3
                    : FONT_SIZES_DESKTOP.h1,
                  // color: theme.palette.primary.tertiary,
                  background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  margin: 0,
                  paddingLeft: "0.5rem",
                  textAlign: smallScreen ? "center" : "",
                }}
              >
                {currentText}
              </p>
            </div>
            <p
              style={{
                fontSize: smallScreen
                  ? FONT_SIZES_MOBILE.h4
                  : FONT_SIZES_DESKTOP.h3,
                // textAlign: "center",
                // color: theme.palette.primary.tertiary,
                background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                margin: 0,
                textAlign: smallScreen ? "center" : "",
              }}
            >
              Passionate about delivering high-end apps
            </p>
            <p
              style={{
                fontSize: smallScreen
                  ? FONT_SIZES_MOBILE.h3
                  : FONT_SIZES_DESKTOP.h3,
                // textAlign: "start",
                // color: theme.palette.primary.tertiary,
                background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                margin: 0,
                textAlign: smallScreen ? "center" : "",
              }}
            >
              React.js / React-Native / Next.js
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: smallScreen ? "center" : "",
            }}
          >
            <ExternalLinksComponent />
          </div>
          <a
            href="mailto: andrei.cioc97@gmail.com"
            style={{
              textDecoration: "none",
              display: smallScreen ? "flex" : "",
              justifyContent: smallScreen ? "center" : "",
              width: smallScreen ? "100%" : "65%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.25rem 0 0.25rem 0",
                border: `1px solid ${theme.palette.primary.secondary}`,
                borderRadius: "50px",
                minWidth: smallScreen ? "90%" : "80%",
                margin: smallScreen
                  ? "0.5rem 0 0.5rem 0"
                  : "0.25rem 0 0.25rem 0",
              }}
            >
              <EmailIcon
                sx={{
                  fontSize: "2rem",
                  color: theme.palette.primary.secondary,
                  margin: 0,
                }}
              />
              <p
                style={{
                  fontSize: "1.5rem",
                  color: theme.palette.primary.secondary,
                  margin: 0,
                }}
              >
                andrei.cioc97@gmail.com
              </p>
            </div>
          </a>

          <GenericButton
            text="Dive deeper"
            style={{
              border: `1px solid ${theme.palette.primary.secondary}`,
              width: smallScreen ? "80%" : "50%",
              boxShadow: `0px 1px 2px 2px ${theme.palette.primary.secondary}`,
              alignSelf: smallScreen ? "center" : "",
              marginTop: smallScreen ? "" : "0.5rem",
            }}
            onClick={() => scrollDownByValue(convertVhToPh(100))}
          />
        </div>
        <div
          style={{
            flex: 0.5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "300px",
              overflow: "hidden",
              borderRadius: "50%",
              marginTop: smallScreen && "5vh",
              //   border: `1px solid ${theme.palette.primary.secondary}`,
              boxShadow: `0px 2px 4px 6px ${theme.palette.primary.secondary}`,
            }}
          >
            <img
              src={img}
              alt="profile photo"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default IntroLayout;
