import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../../utils/CustomHooks";
import GitHubIcon from "@mui/icons-material/GitHub";

const ExternalLinksComponent = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  return (
    <>
      <a href="https://www.futuristix-digital.com/" target="_blank">
        <LanguageIcon
          style={{
            color: theme.palette.primary.secondary,
            fontSize: smallScreen ? "3rem" : "4rem",
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/andrei-cioc-1639bb206/"
        target="_blank"
      >
        <LinkedInIcon
          style={{
            color: theme.palette.primary.secondary,
            fontSize: smallScreen ? "3rem" : "4rem",
          }}
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61553378896979"
        target="_blank"
      >
        <FacebookIcon
          style={{
            color: theme.palette.primary.secondary,
            fontSize: smallScreen ? "3rem" : "4rem",
          }}
        />
      </a>
      <a href="https://www.instagram.com/futuristixdigital/" target="_blank">
        <InstagramIcon
          style={{
            color: theme.palette.primary.secondary,
            fontSize: smallScreen ? "3rem" : "4rem",
          }}
        />
      </a>
      <a href="https://github.com/andreicioc133" target="_blank">
        <GitHubIcon
          style={{
            color: theme.palette.primary.secondary,
            fontSize: smallScreen ? "3rem" : "4rem",
          }}
        />
      </a>
    </>
  );
};

export default ExternalLinksComponent;
