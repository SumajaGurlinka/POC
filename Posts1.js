import React from "react";

import { Box, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Posts from "../containers/Posts";

import Leftpaneitems from "./LeftPaneItems";

//px, em, rem
//vh,

const Posts1 = () => {
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
          <Posts />
        </Box>
      </Box>
    </>
  );
};

export default Posts1;
