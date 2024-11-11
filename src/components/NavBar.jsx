import React from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import GenericButton from "./GenericComponents/GenericButton";
import { scrollDownByValue } from "../utils/CustomFunctions";
import { Divider } from "@mui/material";
import { convertVhToPh } from "../utils/CustomFunctions";

const NavBar = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  const data = [
    { id: 0, text: "About Me", scrollVh: "100" },
    { id: 1, text: "Plan Perfect App", scrollVh: smallScreen ? "120" : "100" },
    { id: 2, text: "Tech Stack", scrollVh: smallScreen ? "350" : "220" },
    { id: 3, text: "Experience", scrollVh: smallScreen ? "530" : "290" },
    { id: 4, text: "My Work", scrollVh: smallScreen ? "650" : "370" },
  ];
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "10vh",
        flexWrap: smallScreen ? "wrap" : "",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      {data.map((button) => (
        <GenericButton
          key={button?.id}
          text={button?.text}
          onClick={() => scrollDownByValue(convertVhToPh(button?.scrollVh))}
          style={{
            color: theme.palette.primary.secondary,
            padding: "0 1rem 0 1rem",
            minWidth: smallScreen ? "50%" : "15vw",
          }}
        />
      ))}
      {smallScreen ? (
        <div
          style={{
            height: "1vh",
            width: "100%",
          }}
        >
          <Divider sx={{ backgroundColor: theme.palette.primary.secondary }} />
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default NavBar;
