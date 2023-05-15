import { Typography } from "@mui/material";
import React from "react";

const ErrorMsg = ({ msg }) => {
  return (
    <Typography
      color="error"
      variant="caption"
      sx={{ position: "absolute", top: "55px" }}
    >
      {msg}
    </Typography>
  );
};

export default ErrorMsg;
