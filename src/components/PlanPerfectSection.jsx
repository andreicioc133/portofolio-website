import React from "react";
import { useTheme } from "@emotion/react";
import { useResponsiveValues } from "../utils/CustomHooks";
import LandscapeImg from "./../assets/PlanPerfectLandscape.png";
import MobileImg from "./../assets/PlanPerfectMobile.png";
import MobileImage1 from "./../assets/PlanPerfectMobile1.png";
import MobileImage2 from "./../assets/PlanPerfectMobile2.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import ShopIcon from "@mui/icons-material/Shop";
import { FONT_SIZES_MOBILE } from "../utils/Constants";
const PlanPerfectSection = () => {
  const theme = useTheme();
  const { smallScreen, mediumScreen } = useResponsiveValues();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          //   width: smallScreen ? "95vw" : "90vw",
          //   height: "80vh",
          //   marginTop: smallScreen ? "" : "2vh",
          // border: `1px solid ${theme.palette.primary.secondary}`,
          // boxShadow: `0px 2px 6px 2px ${theme.palette.primary.black}`,
        }}
      >
        {smallScreen ? (
          <div style={{ marginTop: "3vh", marginBottom: "3vh" }}>
            <a
              href="https://github.com/andreicioc133/DayPlanner"
              target="blank"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "2vh",
              }}
            >
              <GitHubIcon
                style={{
                  fontSize: "2rem",
                  color: theme.palette.primary.secondary,
                }}
              />
              <p
                style={{
                  lineHeight: 0,
                  margin: 0,
                  color: theme.palette.primary.secondary,
                  marginLeft: "0.5vw",
                  fontSize: FONT_SIZES_MOBILE.text,
                }}
              >
                https://github.com/andreicioc133/DayPlanner
              </p>
            </a>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ShopIcon
                style={{
                  fontSize: "2rem",
                  color: theme.palette.primary.secondary,
                }}
              />
              <p
                style={{
                  lineHeight: 0,
                  margin: 0,
                  color: theme.palette.primary.secondary,
                  marginLeft: "0.5vw",
                  fontSize: FONT_SIZES_MOBILE.text,
                  marginTop: "5px",
                }}
              >
                https://github.com/andreicioc133/DayPlanner
              </p>
            </a>
          </div>
        ) : (
          <></>
        )}
        <img
          src={smallScreen ? MobileImg : LandscapeImg}
          alth={"img"}
          style={{
            display: "block",
            width: smallScreen ? "100vw" : "85%",
            height: "auto",
            alignSelf: "center",
          }}
        />
        {smallScreen ? (
          <></>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              width: "45%",
              // top: "40%",
              left: "80%",
              transform: "translate(-50%, -100%)",
              padding: "0 1vw 1vh 1vw",
              fontSize: "18px",
              // textAlign: "center",
            }}
          >
            <a
              href="https://github.com/andreicioc133/DayPlanner"
              target="blank"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 50,
              }}
            >
              <GitHubIcon
                style={{
                  fontSize: "2rem",
                  color: theme.palette.primary.secondary,
                }}
              />
              <p
                style={{
                  lineHeight: 0,
                  margin: 0,
                  color: theme.palette.primary.secondary,
                  marginLeft: "0.5vw",
                  fontSize: mediumScreen ? "12px" : "18px",
                }}
              >
                https://github.com/andreicioc133/DayPlanner
              </p>
            </a>
            {/* <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <ShopIcon
                style={{
                  fontSize: "2rem",
                  color: theme.palette.primary.secondary,
                }}
              />
              <p
                style={{
                  lineHeight: 0,
                  margin: 0,
                  color: theme.palette.primary.secondary,
                  marginLeft: "0.5vw",
                }}
              >
                https://github.com/andreicioc133/DayPlanner
              </p>
            </a> */}
          </div>
        )}
        {smallScreen ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "5vh",
                marginBottom: "5vh",
              }}
            >
              <img
                src={MobileImage1}
                alth={"img"}
                style={{
                  display: "block",
                  width: "45vw",
                  height: "auto",
                  alignSelf: "center",
                  borderRadius: "5px",
                }}
              />
              <img
                src={MobileImage2}
                alth={"img"}
                style={{
                  display: "block",
                  width: "45vw",
                  height: "auto",
                  alignSelf: "center",
                  borderRadius: "5px",
                }}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PlanPerfectSection;
