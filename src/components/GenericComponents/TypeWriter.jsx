import React, { useState, useEffect } from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../../utils/CustomHooks";
import { FONT_SIZES_DESKTOP, FONT_SIZES_MOBILE } from "../../utils/Constants";

const TypeWriter = ({ text, delay, maxProgress, isVisible }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  useEffect(() => {
    if (currentIndex < text.length && isVisible) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (progress < maxProgress) setProgress((prev) => prev + 10);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isVisible]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: smallScreen ? "10vh" : "30vw",
          alignItems: "center",
          padding: smallScreen ? "0 5vw 0 5vw" : "2vh 0 2vh 0",
        }}
      >
        <div>
          <p
            style={{
              fontSize: smallScreen
                ? FONT_SIZES_MOBILE?.h2
                : FONT_SIZES_DESKTOP?.h2,
              // color: theme.palette.primary.tertiary,
              background: `linear-gradient(to right, ${theme.palette.primary.gradient1} 0%, ${theme.palette.primary.gradient2} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            {currentText}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                width: smallScreen ? "70vw" : "20vw",
                color: "red",
                height: "1vh",
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: theme.palette.primary.secondary,
                },
              }}
            />
            <p
              style={{
                fontSize: smallScreen ? "18px" : "1.5rem",
                // textAlign: "center",
                color: theme.palette.primary.secondary,
                margin: 0,
                paddingLeft: "1rem",
              }}
            >
              {progress}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeWriter;
