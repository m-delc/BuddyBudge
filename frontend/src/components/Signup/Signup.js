import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import SignupForm from "../../pages/SignupForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <SignupForm />
    </Paper>
  );
};

export default Signup;
