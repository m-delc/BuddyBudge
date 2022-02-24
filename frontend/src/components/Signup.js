import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import SignupForm from "../pages/SignupForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    background: 'linear-gradient(45deg, pink 10%, lightblue 60%)',
    // margin-bottom: theme.spacing(5)
  },
}));

const Signup = ({ user, setUser, isAuthenticated, setIsAuthenticated }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent} elevation={24} >
      <SignupForm user={user} setUser={setUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Paper>
  );
};

export default Signup;
