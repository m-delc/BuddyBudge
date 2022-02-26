import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import MenuAppBar from "./components/MenuAppBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Fake1 from "./components/Fake/Fake1";
import Fake2 from "./components/Fake/Fake2";
import Navbar2 from "./components/Navbar2";
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
      <Login
        error={"Please Login"}
        user={user}
        setUser={setUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    );

  return (
    <>
      {/* <MenuAppBar user={user} setUser={setUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /> */}
      <Navbar2
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
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='myaccount' element={<MyAccount />} />
        
  
        <Route path="fake1" element={<Fake1 user={user} />} />
        <Route path="fake2" element={<Fake2 />} />
      </Routes>
    </>
  );
}

export default App;
