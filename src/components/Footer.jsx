import React from "react";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10vh",
        bottom: 0,
        backgroundColor: theme.palette.primary.main,
      }}
    ></div>
  );
};

export default Footer;
