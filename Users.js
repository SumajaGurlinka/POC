import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@material-ui/core";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import { Tooltip } from "@mui/material";

import { Box, Divider, Typography, Avatar } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  header: {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
  },
  header1: {
    fontSize: "20px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  box: {
    background: "red",
  },
  icon: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  horizontal: {
    display: "flex",
    flexWrap: "wrap",
  },
  addIcon: {
    cursor: "pointer",
  },
  addIcon: {
    color: "black",
    display: "flex",

    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  sticky: {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    width: "450px",
    zIndex: "1",
    display: "flex",
    justifyContent: "left",
    overflow: "hidden",
    background: "#FCFCFC",
  },
});

const Users = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  const todos = useSelector((state) => state.todos);
  const [open, setOpen] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [showFullTitle, setShowFullTitle] = useState(false);
  const dispatch = useDispatch();
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };
  const handleAddTask = (e) => {
    dispatch.todos.addTodoAsync({
      title: title,
    });

    handleDialogClose();
  };

  useEffect(() => {
    dispatch.users.getUsersAsync();
    dispatch.todos.getTodosAsync();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "450px",
        margin: "0px",
        paddingLeft: "10px",
        background: "#FCFCFC",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <div className={classes.sticky}>
        <h2 className={classes.header}>Team Members</h2>
      </div>
      <Divider variant="middle" />
      <br></br>
      <div className={classes.icon}>
        <div className={classes.root}>
          {users.usersData.map((item) => {
            return (
              <Avatar
                sx={{ padding: "5px", margin: "4px" }}
              >{`${item.name.charAt(0)}${item.username.charAt(0)}`}</Avatar>
            );
          })}
        </div>
      </div>
      <h2 className={classes.header1}>Daily Tasks </h2>
      <div className={classes.horizontal}>
        <Box
          sx={{
            width: 80,
            height: 85,
            padding: "20px",
            paddingBottom: "0px",
            margin: "10px",
            background: "#F2EBE1",
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="caption"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Add new
          </Typography>
          <Tooltip title="Add New Task for users">
            <IconButton onClick={handleDialogOpen}>
              <AddIcon className={classes.addIcon} />
            </IconButton>
          </Tooltip>
          <Dialog
            open={open}
            close={handleDialogClose}
            fullWidth
            maxWidth="sm"
            height="300px"
          >
            <DialogTitle>Add New Task</DialogTitle>
            <br></br>
            <DialogContent>
              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleAddTask}>Add</Button>
            </DialogActions>
          </Dialog>
        </Box>
        {showFullTitle ? (
          <>
            {todos.todosData.map((item) => {
              return (
                <Box
                  sx={{
                    width: 80,
                    height: 85,
                    padding: "20px",
                    paddingBottom: "0px",
                    margin: "10px",
                    bgcolor: "#FCE5BC",
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                  onClick={() => setShowFullTitle(!showFullTitle)}
                >
                  <Typography
                    variant="caption"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {item.title}
                    <br></br>
                  </Typography>
                </Box>
              );
            })}
          </>
        ) : (
          <>
            {todos.todosData.map((item) => {
              return (
                <Box
                  sx={{
                    width: 80,
                    height: 85,
                    padding: "20px",
                    paddingBottom: "0px",
                    margin: "10px",
                    bgcolor: "#FCE5BC",
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                  onClick={() => setShowFullTitle(!showFullTitle)}
                >
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      display: "-webkit-box",

                      WebkitLineClamp: "1",

                      WebkitBoxOrient: "vertical",

                      overflow: "hidden",

                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                    <br></br>
                  </Typography>
                </Box>
              );
            })}
          </>
        )}
      </div>
    </Box>
  );
};
export default Users;
