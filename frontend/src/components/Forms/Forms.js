import React from "react";
import Login from "../Login/Login";
import Signup from "../../pages/SignupForm";
import { Paper } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";

const Forms = () => {
  return (
    <Paper>
      <Routes>
        <Route>
          <Login />
          <Signup />
        </Route>
      </Routes>
    </Paper>
  );
};

export default Forms;
