import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

export const useResponsiveValues = () => {
  const theme = useTheme();
  const extraSmallScreen = useMediaQuery(theme?.breakpoints?.down("sm"));
  const smallScreen = useMediaQuery(theme?.breakpoints?.down("md"));
  const mediumScreen = useMediaQuery(theme?.breakpoints?.down("lg"));
  const largeScreen = useMediaQuery(theme?.breakpoints?.down("xl"));
  const extraLargeScreen = useMediaQuery(theme?.breakpoints?.only("xl"));

  return {
    extraSmallScreen,
    smallScreen,
    mediumScreen,
    largeScreen,
    extraLargeScreen,
  };
};

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return isVisible;
};
