import React from "react";

import { Box, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Todos from "../containers/Todos";

import Leftpaneitems from "./LeftPaneItems";

//px, em, rem
//vh,

const Todos1 = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          height: "100vh",
          width: "100vw",
          margin: 0,
          background: "#FCFCFC",
        }}
      >
        <Leftpaneitems />

        <Box display="flex" sx={{ flex: 1 }}>
          <Todos />
        </Box>
      </Box>
    </>
  );
};

export default Todos1;
