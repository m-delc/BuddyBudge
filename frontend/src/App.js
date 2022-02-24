import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";
import { useEffect, useState } from "react";
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
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
