import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Paper } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import useStyles from "./pages/useStyles";
import ProfileDelete from "./pages/ProfileDelete";
import People from "./components/People";
import Friends from "./components/Friends";
import Person from "./components/Person";
import Dashboard from "./components/Dashboard";
import Goals from "./components/Goals";
import About from "./components/About";
import { useAtom } from "jotai";
import { userAtom, userFriendsAtom } from "./States.js";

function App() {
  const [user, setUser] = useAtom(userAtom);
  const [userFriends, setUserFriends] = useAtom(userFriendsAtom);

  const classes = useStyles();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch("/authorize_user");
      const json = await data.json();
      console.log(json)
      setUser(json);
    };
    fetchUser().catch(console.error);

    // const fetchFriends = async () => {
    //   const data = await fetch("/friends");
    //   const json = await data.json();
    //   setUserFriends(json);
    // };
    // fetchFriends().catch(console.error);

    fetch("/friends").then((res) => {
      if (res.ok) {
        res.json().then(setUserFriends);
      }
    });
  }, []);
  

  return (
    <>
      <Paper className={classes.pageContent} elevation={24}>
        <Navbar />
      </Paper>

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route
          path="home"
          element={
            <Paper className={classes.pageContent}>
              <Home />
            </Paper>
          }
        />
        <Route
          path="profile"
          element={
            <Paper className={classes.pageContent}>
              <Profile />
            </Paper>
          }
        />

        <Route
          path="goals"
          element={
            <Paper className={classes.pageContent}>
              <Goals />
            </Paper>
          }
        />

        <Route path="profile/delete" element={<ProfileDelete />} />
        <Route
          path="findpeople"
          element={
            <Paper className={classes.pageContent}>
              <People />
            </Paper>
          }
        />
        <Route
          path="/friends"
          element={
            <Paper className={classes.pageContent}>
              <Friends />
            </Paper>
          }
        />
        <Route
          path="findpeople/:id"
          element={
            <Paper className={classes.pageContent}>
              <Person />
            </Paper>
          }
        />
        <Route
          path="dashboard"
          element={
            <Paper className={classes.pageContent}>
              <Dashboard />
            </Paper>
          }
        />
        <Route
          path="about"
          element={
            <Paper className={classes.pageContent}>
              <About />
            </Paper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
