import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useAppContext } from "./Store";

// export const MainThemeDark = createTheme({
//   palette: {
//     primary: {
//       main: "#000000",
//       secondary: "#32347E",
//       //   secondary: "#03C4A1",
//       secondaryDarker: "#00A085",
//       tertiary: "#FFFFFF",
//       gradient1: "#ec2F4B",
//       gradient2: "#330867",
//       white: "#FFFFFF",
//       gray: "#0E0E0E",
//       onDarkPhoto: "#FFFFFF",
//     },
//   },
// });

export const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#1F232D",
      secondary: "#01ECFB",
      //   secondary: "#03C4A1",
      secondaryDarker: "#00A085",
      tertiary: "#FFFFFF",
      gradient1: "#009FFF ",
      gradient2: "#ec2F4B",
      white: "#FFFFFF",
      gray: "#cdcdcd",
      black: "#000000",
      onDarkPhoto: "#FFFFFF",
    },
  },
});

const MainThemeProvider = ({ children }) => {
  return <ThemeProvider theme={MainTheme}>{children}</ThemeProvider>;
};

export default MainThemeProvider;
