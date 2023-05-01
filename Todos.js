import React from "react";
import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Box, Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import makeStyles from "@mui/styles/makeStyles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Collapse from "@mui/material/Collapse";
import { Tooltip } from "@material-ui/core";
import { ClassSharp } from "@mui/icons-material";
import Leftpaneitems from "../components/LeftPaneItems";
const useStyles = makeStyles({
  header: {},
  add: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sticky: {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    width: "300px",
    zIndex: "1",
    display: "flex",
    justifyContent: "left",
    overflow: "hidden",
    background: "#F2EBE1",
  },
  team: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  albumns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addnew: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Todos = () => {
  const classes = useStyles();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  useEffect(() => {
    dispatch.todos.getTodosAsync();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "200px",
        margin: "auto",
        paddingLeft: "15px",
        paddingRight: "15px",
        backgroundColor: "#F2EBE1",
        overflow: "hidden",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <div className={classes.sticky}>
        <h2>Todos</h2>
      </div>
      <Divider variant="middle" />
      <div className={classes.team}>
        <h4 style={{ fontFamily: "Manrope, sans-serif" }}>Team</h4>
        <ExpandLess />
      </div>
      <div
        className={classes.albumns}
        style={{ fontFamily: "Manrope, sans-serif" }}
        onClick={handleClick}
      >
        <h4>Albums </h4>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <Collapse in={open}>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          All Projects
        </Typography>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          Design System
        </Typography>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          Make a unique design for customer
        </Typography>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          user flow
        </Typography>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          UX research
        </Typography>
      </Collapse>
      <h4 style={{ fontFamily: "Manrope, sans-serif" }}>Add new</h4>
      <div
        className={classes.addnew}
        style={{ fontFamily: "Manrope, sans-serif" }}
        onClick={handleClick1}
      >
        <h4>Tasks</h4> {open1 ? <ExpandLess /> : <ExpandMore />}
      </div>{" "}
      <Collapse in={open1}>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          All Tasks(3)
        </Typography>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          new(1)
        </Typography>
        <Typography style={{ fontFamily: "Manrope, sans-serif" }}>
          In Progress
        </Typography>
      </Collapse>
      <h4 style={{ fontFamily: "Manrope, sans-serif" }}>Add new task</h4>
    </Box>
  );
};

export default Todos;
