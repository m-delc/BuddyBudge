import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyAccount from "./components/MyAccount";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  if (!isAuthenticated)
    return (
      <>
        <Login
          user={user}
          setUser={setUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </>
    );

  return (
    <>
      <Navbar
        user={user}
        setUser={setUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route path="login" element={<Login />} />
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
        <Route path="myaccount" element={<MyAccount />} />
      </Routes>
    </>
  );
}

export default App;
