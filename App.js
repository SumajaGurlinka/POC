import React from "react";
import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./containers/Todos";
import Posts from "./containers/Posts";
import Todos1 from "./components/Todos1";
import Users from "./containers/Users";
import Dashboard from "./containers/Dashboard";
import Posts1 from "./components/Posts1";
import Users1 from "./components/Users1";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leftpaneitems from "./components/LeftPaneItems";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FAEBD7",
    justifyContent: "space-evenly",
  },
});

//px, em, rem
//vh,

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Todos1 />} />
          <Route path="/people" element={<Posts1 />} />
          <Route path="/chat" element={<Users1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
