import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Paper } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RequireAuth from "./pages/RequireAuth";
import useStyles from "./pages/useStyles";
import Budget from "./components/Budget";
import ProfileDelete from "./pages/ProfileDelete";
import People from "./components/People";
import Friends from "./components/Friends";
import Person from "./components/Person";
import Dashboard from "./components/Dashboard";
import Goals from "./pages/Goals";

function App() {
  const [user, setUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const classes = useStyles();
  const [people, setPeople] = useState(null);
  const [userFriends, setUserFriends] = useState([]);
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    fetch("/authorize_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
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

  // const { id } = user

  // console.log(budget);

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
        <Route
          path="home"
          element={
            <Paper className={classes.pageContent}>
              <Home />{" "}
            </Paper>
          }
        />
        <Route
          path="profile"
          element={
            // <RequireAuth isAuthenticated={isAuthenticated}>
            <Paper className={classes.pageContent}>
              <Profile
                user={user}
                setUser={setUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            </Paper>
            //{" "}
            // </RequireAuth>s
          }
        />

        <Route
          path="budget"
          element={
            <Paper className={classes.pageContent}>
              <Budget user={user} budget={budget} />
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
          path="people"
          element={
            <People
              people={people}
              user={user}
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              userFriends={userFriends}
            />
          }
        />
        <Route
          path="/friends"
          element={
            <Friends user={user} userFriends={userFriends} people={people} />
          }
        />
        <Route
          path="/people/:id"
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
        {/* <Route path='friend/:id' element={<Person />} /> */}
        <Route
          path="dashboard"
          element={<Dashboard user={user} budget={budget} />}
        />
        <Route path="goals" element={<Goals user={user} />} />
      </Routes>
    </>
  );
}

export default App;
