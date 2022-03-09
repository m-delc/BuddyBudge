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

const getData = async () => {
  const people = await fetch("/people").then((res) => res.json());
  const friends = await fetch("/friends").then((res) => res.json());
  const budgets = await fetch("/budgets").then((res) => res.json());
  const personBudgets = await fetch("/person_budgets").then((res) =>
    res.json()
  );
  return { people, friends, budgets, personBudgets };
};

function App() {
  const classes = useStyles();
  const [user, setUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [people, setPeople] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [budget, setBudget] = useState([]);
  const [personBudget, setPersonBudget] = useState([]);

  useEffect(() => {
    fetch("/authorize_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
    // fetch("/people").then((res) => {
    //   if (res.ok) {
    //     res.json().then((x) => {
    //       setPeople(x);
    //     });
    //   }
    // });
    // fetch("/friends").then((res) => {
    //   if (res.ok) {
    //     res.json().then((x) => {
    //       setUserFriends(x);
    //     });
    //   }
    // });
    // fetch("/budgets").then((res) => {
    //   if (res.ok) {
    //     res.json().then((x) => {
    //       setBudget(x);
    //     });
    //   }
    // });
    // fetch("/person_budgets").then((res) => {
    //   if (res.ok) {
    //     res.json().then((x) => {
    //       setPersonBudget(x);
    //     });
    //   }
    // });
  }, []);

  useEffect(() => {
    (async () => {
      const allData = await getData();
      setPeople(allData.people);
      setUserFriends(allData.friends);
      setBudget(allData.budgets);
      setPersonBudget(allData.personBudgets);
    })();
  }, []);

  const loaded = people && userFriends && budget && personBudget;

  if (!loaded) {
    return "...loading";
  }

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
            <Paper className={classes.pageContent}>
              <Profile
                user={user}
                setUser={setUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            </Paper>
            // //{" "}
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
        <Route
          path="dashboard"
          element={
            <Dashboard
              user={user}
              budget={budget}
              personBudget={personBudget}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
