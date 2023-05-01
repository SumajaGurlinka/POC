import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Search } from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  Grid,
  TextField,
  Tooltip,
  IconButton,
  Icon,
  InputAdornment,
  Avatar,
  Container,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { borderRadius } from "@mui/system";

const useStyles = makeStyles({
  header: {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    width: "560px",
    zIndex: "1",
    display: "flex",
    justifyContent: "left",
    overflow: "hidden",
    background: "#FCFCFC",
  },
  root: {
    float: "left",
    padding: "33px",
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    display: "flex",
    flexWrap: "wrap",
  },
  a: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Posts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch.posts.getPostsAsync();
  }, []);

  return (
    <Container
      sx={{
        height: "100vh",

        margin: "auto",

        background: "#FCFCFC",
        overflow: "hidden",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <div className={classes.header}>
        <h2>Albums</h2>
      </div>

      <TextField
        sx={{
          borderRadius: "20px",
          width: "559.5px",
          display: "flex",
          marginBottom: "18px",
          marginTop: "18px",
          alignItems: "left",
        }}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder="Searching for..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div className={classes.horizontal}>
        {posts.postsData
          .filter((item) => {
            if (query === "") {
              return item;
            } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return (
              <Box
                sx={{
                  width: 130,
                  height: 160,
                  padding: "20px",
                  paddingBottom: "0px",
                  margin: "10px",
                  bgcolor: "#FCE5BC",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <div className={classes.avatar}>
                  <div></div>
                  <Avatar src={item.url}></Avatar>

                  <MoreVertOutlinedIcon sx={{ paddingLeft: "70px" }} />
                </div>

                <br></br>
                <Typography
                  variant="caption"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
      </div>
    </Container>
  );
};

export default Posts;
