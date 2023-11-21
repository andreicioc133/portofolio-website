import React from "react";
import { Container, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useResponsiveValues } from "./utils/CustomHooks";
import { useTheme } from "@emotion/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const AppRouter = () => {
  const { smallScreen } = useResponsiveValues();
  const theme = useTheme();
  return (
    <Router>
      <CssBaseline>
        {smallScreen ? <></> : <NavBar />}

        <Container
          maxWidth="xxl"
          sx={{
            overflowY: "hidden",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: smallScreen ? "100vh" : "90vh",
            minWidth: "100%",
            alignItems: "center",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
        <Footer />
      </CssBaseline>
    </Router>
  );
};

export default AppRouter;
