import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   fetch("/authorize_user").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setIsAuthenticated(true);
  //         setUser(user);
  //       });
  //     }
  //   });
  // }, [isAuthenticated]);

  // if (!isAuthenticated) return <Login error={"Please Login"} />

  return (
    <div className="App">
      <MenuAppBar />
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
