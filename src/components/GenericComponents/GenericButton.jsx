import React from "react";
import { Button, styled } from "@mui/material";

const GenericButton = ({
  text,
  style,
  onClick,
  startIcon,
  border = false,
  ...props
}) => {
  const StyledBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.secondary,
    minWidth: "6vw",
    minHeight: "3vh",
    height: "7vh",
    borderColor: theme.palette.primary.secondary,
    border: border ? "" : "none",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.primary.secondary,
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.secondary,
    },
    ...style,
  }));

  return (
    <StyledBtn
      variant={"outlined"}
      startIcon={startIcon}
      onClick={onClick}
      {...props}
    >
      {text}
    </StyledBtn>
  );
};

export default GenericButton;
