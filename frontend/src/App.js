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
import { userAtom } from "./States.js";

function App() {
  const [user, setUser] = useAtom(userAtom);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const classes = useStyles();
  const [people, setPeople] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [budget, setBudget] = useState([]);

  // console.log(userFriends)

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch("/authorize_user");
      const json = await data.json();
      setIsAuthenticated(true);
      setUser(json.user);
    };
    fetchUser().catch(console.error);

    // const fetchPeople = async () => {
    //   const data = await fetch("/people");
    //   const json = await data.json();
    //   setPeople(json);
    // };
    // fetchPeople().catch(console.error);

    fetch("/people").then((res) => {
      if (res.ok) {
        res.json().then(setPeople);
      }
    });
    fetch("/friends").then((res) => {
      if (res.ok) {
        res.json().then(setUserFriends);
      }
    });
    fetch("/budgets").then((res) => {
      if (res.ok) {
        res.json().then(setBudget);
      }
    });
  }, []);

  return (
    <>
      <Paper className={classes.pageContent} elevation={24}>
        <Navbar
          // user={user}
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
              <Profile
                user={user}
                setUser={setUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            </Paper>
          }
        />

        <Route
          path="goals"
          element={
            <Paper className={classes.pageContent}>
              <Goals user={user} budget={budget} />
            </Paper>
          }
        />

        <Route
          path="profile/delete"
          element={
            <ProfileDelete
              user={user}
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="findpeople"
          element={
            <Paper className={classes.pageContent}>
              <People
                people={people}
                user={user}
                setUser={setUser}
                setIsAuthenticated={setIsAuthenticated}
                userFriends={userFriends}
              />
            </Paper>
          }
        />
        <Route
          path="/friends"
          element={
            <Paper className={classes.pageContent}>
              <Friends user={user} userFriends={userFriends} people={people} />
            </Paper>
          }
        />
        <Route
          path="findpeople/:id"
          element={
            <Paper className={classes.pageContent}>
              <Person
                user={user}
                people={people}
                userFriends={userFriends}
                setUserFriends={setUserFriends}
              />
            </Paper>
          }
        />
        <Route
          path="dashboard"
          element={
            <Paper className={classes.pageContent}>
              <Dashboard user={user} budget={budget} />
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
