import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Fake1 from "./components/Fake/Fake1";
import Fake2 from "./components/Fake/Fake2";

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

  if (!isAuthenticated) return <Login error={"Please Login"} />

  return (
    <div className="App">
      <MenuAppBar />
      <div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="fake1" element={<Fake1 />} />
          <Route path="fake2" element={<Fake2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
