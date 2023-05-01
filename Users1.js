import React from "react";

import { Box, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Users from "../containers/Users";

import Leftpaneitems from "./LeftPaneItems";

//px, em, rem
//vh,

const Users1 = () => {
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

        <Box display="flex" sx={{ flex: 2.5, justifyContent: "center" }}>
          <Users />
        </Box>
      </Box>
    </>
  );
};

export default Users1;
