import React, { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../../utils/CustomHooks";

const TypeWriterWithoutProgress = ({ text, delay, isVisible }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  useEffect(() => {
    if (currentIndex < text.length && isVisible) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
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
          minWidth: "20vw",
          width: "100%",
          minHeight: "15vh",
          //   alignItems: "center",
          padding: "1rem 0 1rem 0",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "1.6rem",
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
        </div>
      </div>
    </>
  );
};

export default TypeWriterWithoutProgress;
