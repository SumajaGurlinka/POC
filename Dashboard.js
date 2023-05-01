import React from "react";

import { Box, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Todos from "./Todos";
import Posts from "./Posts";
import Users from "./Users";
import Leftpaneitems from "../components/LeftPaneItems";

//px, em, rem
//vh,

const Dashboard = () => {
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
          <Box display="flex" sx={{ flex: 2 }}>
            <Posts />
            <Box display="flex" flexDirection="column">
              <Users />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );

  // return (
  //   <>
  //   <Leftpaneitems />
  //   <div style={{ display: 'flex' ,background:"#FCFCFC"}}>
  //     <div style={{ flex: 0.25, height: '100vh',width:"300px"}}><Todos/></div>
  //     <div style={{ flex: 2.5, height: '100vh' }}><Posts/></div>
  //     <div style={{ flex: 1, height: '100vh' }}><Users/></div>
  //   </div>
  //   </>
  // );
};

export default Dashboard;
