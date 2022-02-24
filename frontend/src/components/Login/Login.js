import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import LoginForm from "../../pages/LoginForm";
import { blue } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
    // elevation: theme.spacing(24)

  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <LoginForm />
    </Paper>
  );
};

export default Login;
