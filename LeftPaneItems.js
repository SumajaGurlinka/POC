import React from "react";
import {
  IconButton,
  Divider,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Box } from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import { ContactSupport } from "@material-ui/icons";
import { PeopleOutline } from "@material-ui/icons";
import { ChatBubbleOutline } from "@material-ui/icons";
import { StopRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  space: {
    height: "120px",
    width: "50px",
    background: "#FCFCFC",
  },
  space1: {
    height: "346px",
    width: "50px",
    background: "#FCFCFC",
  },
  home: {
    width: "50px",
    height: "60px",
  },
  people: {
    width: "50px",
    height: "60px",
  },
  padding: {},
  chat: {
    width: "50px",
    height: "60px",
  },
});
const Leftpaneitems = () => {
  const classes = useStyles();
  const [activeButton1, setActiveButton1] = useState(false);
  const [activeButton2, setActiveButton2] = useState(false);
  const [activeButton3, setActiveButton3] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    setActiveButton1(true);

    navigate("/home");
  };

  const handleButtonClick2 = () => {
    setActiveButton2(true);

    navigate("/people");
  };

  const handleButtonClick3 = () => {
    setActiveButton3(true);
    navigate("/chat");
  };

  return (
    <Box
      height="100vh"
      flexDirection="column"
      alignItems="center"
      padding="0px"
      display="flex"
      background="#FCFCFC"
      sx={{
        position: "sticky",
      }}
    >
      <StopRounded
        style={{
          fontSize: 40,
          top: "0",
          paddingTop: "10px",
        }}
      />
      <br></br>
      <div className={classes.space}></div>

      <ListItemButton
        sx={{
          paddingBottom: "15px",
          paddingTop: "15px",
          margin: "auto",
          width: "52px",
          background: activeButton1 || id === "/todos" ? "#F2EBE1" : "",
        }}
        onClick={() => handleButtonClick1()}
      >
        <HomeOutlined
          style={{ fontSize: 25, display: "flex", justifyContent: "center" }}
        />
      </ListItemButton>

      <ListItemButton
        sx={{
          paddingBottom: "15px",
          paddingTop: "15px",
          width: "52px",
          background: activeButton2 || id === "/posts" ? "#F2EBE1" : "",
        }}
        onClick={() => handleButtonClick2()}
      >
        <PeopleOutline
          style={{ fontSize: 25, display: "flex", justifyContent: "center" }}
        />
      </ListItemButton>

      <ListItemButton
        sx={{
          paddingBottom: "15px",
          paddingTop: "15px",
          width: "52px",
          background: activeButton3 || id === "/users" ? "#F2EBE1" : "",
        }}
        onClick={() => handleButtonClick3()}
      >
        <ChatBubbleOutline style={{ fontSize: 25, justifyContent: "center" }} />
      </ListItemButton>

      <div className={classes.space1}></div>
      <ContactSupport style={{ fontSize: 40 }} />
    </Box>
  );
};

export default Leftpaneitems;
