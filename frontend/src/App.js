import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Paper, makeStyles } from "@material-ui/core";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyAccount from "./components/MyAccount";
import RequireAuth from "./pages/RequireAuth";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    background: "linear-gradient(45deg, pink 10%, lightblue 60%)",
  },
}));

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const classes = useStyles();



  useEffect(() => {
    fetch("/authorize_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  }, [isAuthenticated]);

  return (
    <>
    <Paper className={classes.pageContent} elevation={24}>
      <Navbar
        user={user}
        setUser={setUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      </Paper>
      <Routes>
        <Route
          path="login"
          element={
            <Login
              user={user}
              setUser={setUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="signup"
          element={
            <Signup
              user={user}
              setUser={setUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="myaccount"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <MyAccount user={user} />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
